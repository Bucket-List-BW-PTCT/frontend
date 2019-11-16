import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navigation from "./components/Navbar";

function App() {
  return (
    <div>
      <Navigation />
      {/* <Signin /> */}
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
