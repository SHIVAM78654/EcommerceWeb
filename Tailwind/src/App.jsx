import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CategorySection from "./Components/CategorySection";
import FeatureSection from "./Components/FeatureSection";
import PromoSection from "./Components/PromoSection";
import GoldSection from "./Components/GoldSection";
import BrandSlider from "./Components/BrandSlider";
import AnimatedShowcase from "./Components/AnimatedShowcase";
import AllProducts from "./Components/Allproduct";
import LoginSignup from "./pages/LoginSignup";
import CartPage from "./pages/CartPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";

function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Hero />
      <CategorySection />
      <PromoSection />
      <GoldSection />
      <BrandSlider />
      <FeatureSection />
      <AnimatedShowcase />
      <AllProducts />
    </div>
  );
}

// Example isAuthenticated function, replace with your auth logic
function isAuthenticated() {
  return Boolean(localStorage.getItem("token"));
}

function App() {
  const loggedIn = isAuthenticated();

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginSignup />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute isAuthenticated={loggedIn}>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
