import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation/Navbar";
import HomeNav from "./components/Navigation/HomeNav";
import BucketCounter from "./components/BucketCounter";


function App() {
  return (
    <div>
      <BucketCounter />
      {/* <HomeNav /> */}
      {/* <Navigation /> */}
      <Signin />
      <SignUp />

    </div>
  );
}

export default App;
