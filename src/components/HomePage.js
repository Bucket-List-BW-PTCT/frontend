import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoggedIn } from "../actions/auth";
import styled from "styled-components";
// import BucketCard from '../components/Buckets/BucketCard';
import BucketAdd from "../components/Buckets/BucketAdd";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import BucketLists from "./BucketLists";

function HomePage(props) {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.setLoggedIn();
      localStorage.setItem("userInfo", props.userInfo.username);
      localStorage.setItem("id", props.userInfo.id);
    }
  }, []);

  return (
    <div>
      {props.isLoggedIn ? (
        // <Dashboard />
        <div className="dashboard">
          <h1>HOME</h1>
          <BucketAdd />
          <BucketLists />
        </div>
      ) : (
        <div className="signin-signup">
          <StyledHeader>
            Begin working on your own BucketList today!
          </StyledHeader>
          <StyledP>Returning user?</StyledP>
          <Signin />
          <StyledP>Get started!</StyledP>
          <Signup />
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
    isLoggedIn: state.isLoggedIn,
    userInfo: { ...state.userInfo }
  };
}

const mapDispatchToProps = {
  setLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const StyledP = styled.p`
  color: green;
  font-size: 1.5rem;
`;

const StyledHeader = styled.h2`
  color: green;
  font-size: 2.5rem;
  border-bottom: 1px solid green;
  border-top: 1px solid green;
  padding: 20px;
  margin-top: -50px;
`;
