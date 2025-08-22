"use client"

import React, { useState } from 'react';
import Navbar from '../components/Navbar/page';

const Hero = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const imgElement = e.currentTarget;
    const fallbackElement = imgElement.nextElementSibling;
    
    imgElement.style.display = 'none';
    if (fallbackElement && fallbackElement instanceof HTMLElement) {
      fallbackElement.style.display = 'flex';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Left Panel - Branding */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 p-8 flex flex-col items-center justify-center text-white relative">
             {/* Logo */}
<div className="mb-8">
  <div className="mb-4 flex items-center justify-center">
    <img 
      src="Images/logo.jpeg"   // make sure your logo.jpeg is inside the /public folder
      alt="TradeConnect Logo" 
      className="w-20 h-20 object-contain"
    />
  </div>
  <h1 className="text-3xl font-bold text-center">TradeConnect</h1>
</div>

            
              {/* Welcome Text */}
              <div className="text-center">
                <p className="text-lg text-blue-100 leading-relaxed">
                  Welcome back to your local marketplace<br />
                  to Trade, Buy & Sell.
                </p>
              </div>
            
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white bg-opacity-5 rounded-full"></div>
            </div>
          
            {/* Right Panel - Login Form */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="w-full max-w-sm mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Login to Your Account
                </h2>
              
                <div className="space-y-6">
                  {/* Email Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                
                  {/* Password Field */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                
                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Forgot Password?
                    </a>
                  </div>
                
                  {/* Login Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                  >
                    Login
                  </button>
                
                  {/* Sign Up Link */}
                  <div className="text-center">
                    <span className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-500 transition-colors font-medium"
                      >
                        Sign Up
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;