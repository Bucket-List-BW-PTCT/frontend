import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Signin />
      <SignUp />
    </div>
  );
}

export default App;
