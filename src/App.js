import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./layout/ScrollToTop";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./App.scss";
import Header from "./layout/header";
import Footer from "./layout/footer";
import NavigationBar from "./layout/NavigationBar";
import { Home } from "./components/home";
import { AboutUs } from "./components/aboutus";
import { HowItWorks } from "./components/howitworks";
import { Contact } from "./components/contact";
import { Discord } from "./components/discord";

// import React, { useState, useEffect } from "react";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   // Check if the user is already logged in (e.g., check token or authentication data in local storage)
  //   const isAuthenticated = checkUserAuthentication();
  //   setIsLoggedIn(isAuthenticated);
  // }, []);
  // const checkUserAuthentication = () => {
  //   // Example: Check if a token exists in local storage
  //   const token = window.localStorage.getItem("user_id");
  //   return !!token; // Return true if the token exists
  // };
  // console.log("isLoggedIn", isLoggedIn);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* <Route path="/updateWeb" element={<UpdateWeb />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discord" element={<Discord />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
