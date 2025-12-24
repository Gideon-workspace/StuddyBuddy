import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import lock from "../assets/password.png";
import email from "../assets/email.png";
import eye from "../assets/eye.png";
import userIcon from "../assets/user.png"; 
import grade from "../assets/grades.png";
import attendance from "../assets/user-check.png"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-4 md:p-8 font-sans"
    >
      {/* Header / Logo */}
      <header className="w-full max-w-7xl flex justify-between items-center absolute top-6 px-6 z-20">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-gray-900">StuddyBuddy</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500 hidden sm:block">Already have an account?</span>
          <button 
          className="bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition"
          onClick={()=> navigate("/signin")}
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[600px] mt-20 md:min-h-[600px]">
        
        {/* Left Side: Dark Hero Section */}
        <div className="md:w-1/2 relative p-20 flex flex-col justify-end overflow-hidden
             bg-[url('../assets/studying.jpg')] bg-cover bg-center bg-no-repeat">

           {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent blur-sm rotate-12"></div>
            <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-300 to-transparent blur-md -rotate-6"></div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Join the future <br /> of learning.
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xs">
              Create an account and start your journey with your own personalized AI study partner.
            </p>
            <div className="flex space-x-2">
              <div className="h-1.5 w-1.5 bg-gray-700 rounded-full"></div>
              <div className="h-1.5 w-8 bg-teal-500 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-500 mb-8 text-sm">Fill in your details to get started.</p>

            <form className="space-y-4">

                <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Username</label>
                <div className="relative">
                  <img 
                    src={userIcon}
                    alt="user" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type="text"
                    placeholder="Academic Slayer"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                </div>
              </div>
              {/* Full Name Field */}
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Firstname</label>
                <div className="relative">
                  <img 
                    src={userIcon}
                    alt="user" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type="text"
                    placeholder="John "
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Lastname</label>
                <div className="relative">
                  <img 
                    src={userIcon}
                    alt="user" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type="text"
                    placeholder=" Doe"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                </div>
              </div>

              

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Email Address</label>
                <div className="relative">
                  <img 
                    src={email}
                    alt="email" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type="email"
                    placeholder="student@university.edu"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                </div>
              </div>

            {/* Model information */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Grades</label>
                <div className="relative">
                  <img 
                    src={grade}
                    alt="grades" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type="name"
                    placeholder="80,65,90,55,..."
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                </div>
              </div>

               <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Attendance Percentage</label>
                <div className="relative">
                  <img 
                    src={attendance}
                    alt="user-check" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type="number"
                    placeholder="80"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                </div>
              </div>


              {/* Password Field */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Password</label>
                <div className="relative">
                  <img 
                    src={lock}
                    alt="lock" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <img 
                      src={eye}
                      alt="toggle" 
                      className={`w-5 h-5 object-contain transition ${showPassword ? 'opacity-100' : 'opacity-40'}`}
                    />
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-1">Confirm Password</label>
                <div className="relative">
                  <img 
                    src={lock}
                    alt="lock" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 focus:outline-none"
                  >
                    <img 
                      src={eye}
                      alt="toggle" 
                      className={`w-5 h-5 object-contain transition ${showConfirmPassword ? 'opacity-100' : 'opacity-40'}`}
                    />
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[10px] text-gray-500 mb-4">
                  By clicking "Create Account", you agree to our <span className="text-teal-600 font-bold cursor-pointer underline">Terms of Service</span> and <span className="text-teal-600 font-bold cursor-pointer underline">Privacy Policy</span>.
                </p>
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-700 text-black font-bold py-4 rounded-2xl transition shadow-lg shadow-teal-100"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-gray-400 text-[10px]">
        © 2024 StuddyBuddy AI. All rights reserved.
      </footer>
    </motion.div>
  );
};

export default SignUp;