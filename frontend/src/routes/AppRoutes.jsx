import {Routes,Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import ForgotPassword from "../pages/ForgotPassword";

export default function AppRoutes() {
    const lo9cation = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={lo9cation} key={lo9cation.pathname}>
                {/* Homepage */}
                <Route path="/" element={<LandingPage />} />

                <Route path="/signin" element={<SignIn />} />

                <Route path="/signup" element={<SignUp />} />

                <Route path="/dashboard" element={<HomePage />} />

                <Route path="/forgotpassword" element={<ForgotPassword />} />
                
            </Routes>
        </AnimatePresence>
    );
}