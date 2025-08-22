"use client"

import React, { useState } from 'react';
import Navbar from '../components/Navbar/page';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    zone: '',
    password: '',
    confirmPassword: '',
    registerAsAdmin: false,
    adminCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sign up attempt:', formData);
  };

  return (
    <>
      {/* Navbar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content with proper top margin */}
      <div className="min-h-screen bg-gray-100 pt-16">
        <div className="flex items-center justify-center p-4 py-8">
          <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row min-h-[600px]">
              {/* Left Panel - Branding */}
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-700 p-8 flex flex-col items-center justify-center text-white relative">
                {/* Logo */}
                <div className="mb-8 text-center">
                  <div className="mb-6 flex items-center justify-center">
                    {/* Logo Container with white background */}
                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg">
                      {/* Spinning logo with enhanced animation */}
                      <img 
                        src="/Images/logo.jpeg"   // make sure it's inside /public/Images
                        alt="TradeConnect Logo" 
                        className="w-20 h-20 object-contain rounded-full animate-spin"
                        style={{ 
                          animationDuration: "3s",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                        }}
                      />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">TradeConnect</h1>
                  <p className="text-blue-100 text-lg">
                    Trade, Buy & Sell Within Barangay Bulihan,<br />
                    Silang Cavite
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
              </div>

              {/* Right Panel - Sign Up Form */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="w-full max-w-sm mx-auto">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-8 text-center">
                    Sign Up
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>

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

                    {/* Zone Selection */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <select
                        name="zone"
                        value={formData.zone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white"
                        required
                      >
                        <option value="">Select your Zone</option>
                        <option value="zone1">Zone 1</option>
                        <option value="zone2">Zone 2</option>
                        <option value="zone3">Zone 3</option>
                        <option value="zone4">Zone 4</option>
                      </select>
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
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showConfirmPassword ? (
                          <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Admin Registration Checkbox */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="registerAsAdmin"
                        checked={formData.registerAsAdmin}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-sm text-gray-700">
                        Register as Admin (requires admin code)
                      </label>
                    </div>

                    {/* Admin Code Field - Only show if checkbox is checked */}
                    {formData.registerAsAdmin && (
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m0 0a2 2 0 012 2 2 2 0 01-2 2m-2-4a2 2 0 00-2 2 2 2 0 002 2m0 0a2 2 0 012 2M9 5a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2H9z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="adminCode"
                          value={formData.adminCode}
                          onChange={handleInputChange}
                          placeholder="Enter Admin Code"
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required={formData.registerAsAdmin}
                        />
                      </div>
                    )}

                    {/* Terms and Privacy */}
                    <div className="text-center text-sm text-gray-600 py-2">
                      By signing up, you agree to our{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Terms and Privacy
                      </a>
                    </div>

                    {/* Sign Up Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                    >
                      Sign Up
                    </button>

                    {/* Login Link */}
                    <div className="text-center pt-4">
                      <span className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <a
                          href="/Hero"
                          className="text-blue-600 hover:text-blue-500 transition-colors font-medium"
                        >
                          Login
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;