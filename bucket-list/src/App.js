import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import Navbar from "./components/Navigation/Navbar";
import BucketCounter from "./components/BucketCounter";
import SignUp from "./components/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <BucketCounter />
      {/* <HomeNav /> */}
      {/* <Navigation /> */}
      <Signin />
      <SignUp />
    </div>
  );
}

export default App;
