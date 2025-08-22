"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar/page";
import { useRouter } from "next/navigation"; // ✅ Import router

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter(); // ✅ Initialize router

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    router.push("/Hero"); // ✅ Redirect to Hero page
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
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <img
                      src="/Images/logo.jpeg"
                      alt="TradeConnect Logo"
                      className="w-20 h-20 object-contain rounded-full"
                      style={{
                        animation: "spin 3s linear infinite",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-center">TradeConnect</h1>
              </div>

              {/* Welcome Text */}
              <div className="text-center">
                <p className="text-lg text-blue-100 leading-relaxed">
                  Reset your password to get back
                  <br />
                  to your local marketplace.
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white bg-opacity-5 rounded-full"></div>
            </div>

            {/* Right Panel - Forgot Password Form */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="w-full max-w-sm mx-auto">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                      Forgot Password?
                    </h2>
                    <p className="text-gray-600 text-sm text-center mb-8">
                      Enter your email address and we'll send you a link to
                      reset your password.
                    </p>

                    <div className="space-y-6">
                      {/* Email Field */}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          required
                        />
                      </div>

                      {/* Send Email Button */}
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!email}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Send Reset Email
                      </button>

                      {/* Back to Login Link */}
                      <div className="text-center">
                        <span className="text-sm text-gray-600">
                          Remembered your password?{" "}
                          <button
                            onClick={handleBackToLogin}
                            className="text-blue-600 hover:text-blue-500 transition-colors font-medium bg-none border-none cursor-pointer"
                          >
                            Back to Login
                          </button>
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  // Success Message
                  <div className="text-center">
                    {/* Success Icon */}
                    <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Email Sent!
                    </h2>

                    <p className="text-gray-600 text-sm mb-8">
                      We've sent a password reset link to <strong>{email}</strong>.
                      Please check your email and follow the instructions to
                      reset your password.
                    </p>

                    <div className="space-y-4">
                      <button
                        onClick={handleBackToLogin}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                      >
                        Back to Login
                      </button>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full bg-white text-gray-700 py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
                      >
                        Send Another Email
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for the spin animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
