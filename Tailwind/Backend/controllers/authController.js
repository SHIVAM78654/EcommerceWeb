const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const transporter = require('../utils/mailer');

const JWT_SECRET = process.env.JWT_SECRET || 'sh1v@mjwT$123456secureTokenKey!';
const JWT_EXPIRES_IN = '1d';

// Register user
exports.register = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Register Error:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Login user
exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        // Find user and include password field
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Validate password using model method
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const payload = { id: user._id, email: user.email };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        res.json({ token });
    } catch (err) {
        console.error('Login Error:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Forgot password - generate token, save hashed token & expiry, send reset email
exports.forgotPassword = async(req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log(`Forgot Password: User with email ${email} not found`);
            return res.status(404).json({ message: 'User with this email does not exist' });
        }

        // Generate plain reset token and hashed token to store
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const resetPasswordExpire = Date.now() + 3600000; // 1 hour expiration

        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpire = resetPasswordExpire;
        await user.save();

        // Compose reset URL
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

        // Email message content
        const message = `
      <h2>Password Reset Request</h2>
      <p>Please click the link below to reset your password.</p>
      <a href="${resetUrl}" target="_blank">${resetUrl}</a>
      <p>This link is valid for 1 hour.</p>
    `;

        // Send reset email
        await transporter.sendMail({
            from: `"Your App" <${process.env.SMTP_USER}>`,
            to: user.email,
            subject: 'Password Reset',
            html: message,
        });

        console.log(`Forgot Password: Password reset email sent to ${user.email}`);
        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        console.error('Forgot Password Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Reset password - verify token & expiry, update password
exports.resetPassword = async(req, res) => {
    const { token, password } = req.body;

    if (!token || !password) {
        return res.status(400).json({ message: 'Token and password are required' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    // Hash the provided token for database comparison
    const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

    try {
        // Find user with matching token and not expired
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() },
        }).select('+password +resetPasswordToken +resetPasswordExpire');

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Update password (assumed hashed in User model pre-save middleware)
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        console.error('Reset Password Error:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};