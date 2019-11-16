import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation/Navbar";
import HomeNav from "./components/Navigation/HomeNav";

function App() {
  return (
    <div>
      <HomeNav />
      {/* <Navigation /> */}
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
