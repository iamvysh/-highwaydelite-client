import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Otp from "./pages/Otp";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<Otp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
