import { useState } from "react"; // Added this
import { motion } from "framer-motion";
import lock from "../assets/password.png";
import email from "../assets/email.png";
import eye from "../assets/eye.png";
import { useNavigate } from 'react-router-dom'


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
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
          <span className="text-sm text-gray-500 hidden sm:block">Don't have an account?</span>
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition"
          onClick={()=> navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[650px] mt-20 md:min-h-[500px]">
        
        {/* Left Side: Dark Hero Section */}
        <div className="md:w-1/2 relative p-20 flex flex-col justify-end overflow-hidden
             bg-[url('../assets/study.jpg')] bg-cover bg-center bg-no-repeat">

           {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>


          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent blur-sm rotate-12"></div>
            <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-300 to-transparent blur-md -rotate-6"></div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white leading-tight mb-4">
              Master any subject <br /> with AI.
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xs">
              Join thousands of students accelerating their learning with our personalized LLM tutors and by collaborating with others.
            </p>
            <div className="flex space-x-2">
              <div className="h-1.5 w-8 bg-teal-500 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-700 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Sign In Form */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
            <p className="text-gray-500 mb-10 text-sm">Please enter your details to sign in.</p>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                <div className="relative">
                 <img 
                    src={email}
                    alt="lock" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 object-contain"
                  />
                  <input
                    type="email"
                    placeholder="student@university.edu"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none border border-gray-300 transition text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Password</label>
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
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >

                  <img 
                    src={eye} 
                    alt="toggle visibility" 
                    className="w-5 h-5 object-contain opacity-90 hover:opacity-100 transition"
                  />

                  </button>

                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                  <span className="text-xs text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-xs font-bold text-gray-900 hover:underline">Forgot Password?</a>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-700 text-black font-bold py-4 rounded-2xl transition shadow-lg shadow-teal-100 mt-4"
              >
                Sign In
              </button>
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

export default SignIn;