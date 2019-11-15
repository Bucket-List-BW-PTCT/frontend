import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Signin /> */}
      <Signup />
    </div>
  );
}

export default App;
