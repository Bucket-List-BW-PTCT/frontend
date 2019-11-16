import React from "react";
import "./App.css";
import Signin from "./components/Signin";
import Navbar from "./components/Navigation/Navbar";
import SignUp from "./components/Signup";
import BucketCounter from "./components/BucketCounter";
import BucketCard from './components/BucketCard';


function App() {
  return (
    <div>
      <Navbar />
      <BucketCard />
      {/* <BucketCounter /> */}
      {/* <HomeNav /> */}
      {/* <Navigation /> */}
      {/* <Signin />
      <SignUp /> */}

    </div>
  );
}

export default App;
