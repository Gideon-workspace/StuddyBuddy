import { useState } from "react";
import { Mail, ArrowLeft, Lock, Sparkles } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth} from "../services/firebase/firebase.js"

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const showSnackbar = (msg, type) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      showSnackbar("Please enter your email.", "error");
      return;
    }
    setLoading(true);
    // Simulate API call
    try{
        await sendPasswordResetEmail(auth, email);
        setTimeout(() => {
            showSnackbar(
                "Password reset email sent! Check your inbox (and spam).",
                "success"
            );
            navigate("/signin");
            setLoading(false);
        }, 2000);
    }catch(err){
        showSnackbar(err.message, "error");
        setLoading(false);
    }

    
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate("/signin")}
          className="mb-4 flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Sign In</span>
        </button>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Icon Header */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 bg-teal-600 bg-clip-text text-transparent">
              Reset Password
            </h2>
            <p className="text-gray-500 text-sm">
              Enter your email and we'll send reset instructions.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleReset} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all transform ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-teal-500 hover:from-teal-700 hover:to-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending Reset Link...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Reset Link
                </span>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Remember your password?{" "}
              <button
                onClick={() => navigate("/signin")}
                className="text-teal-600 font-semibold hover:text-teal-700 underline"
              >
                Sign in instead
              </button>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Check your spam folder if you don't see the email within a few minutes.
          </p>
        </div>
      </div>

      {/* Snackbar */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className={`px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[320px] ${
              severity === "success"
                ? "bg-gradient-to-r from-green-500 to-emerald-600"
                : "bg-gradient-to-r from-red-500 to-rose-600"
            } text-white`}
          >
            <div className="flex-1">
              <p className="font-medium text-sm">{message}</p>
            </div>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ForgotPassword;
