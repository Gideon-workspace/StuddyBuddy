import './styles/App.css'

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import LandingPage from './pages/LandingPage'

function App() {
  return (
     <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
