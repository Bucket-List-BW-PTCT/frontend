import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DivStyle = styled.div`
  margin: 10px auto;
  width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 8px #888888;
`;

const ParaStyle = styled.p`
  text-align: center;
  color: grey;
  font-size: 1.2rem;
`;

const HeaderStyle = styled.h2`
  color: grey;
`;

export default function SignIn() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (values, { setStatus, resetForm }) => {
    axios
      .post("https://bw-bucketlist.herokuapp.com/api/users/login/", values)
      .then(res => {
        setStatus(res.data.payload);
        console.log(values);
        resetForm();
      });
  };

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <DivStyle>
        <HeaderStyle>Sign In</HeaderStyle>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="userInfo"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChanges}
            />
          </label>
          <label>
            <input
              className="userInfo"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChanges}
            />
          </label>
          <button className="signInButton">Sign In</button>
        </form>
      </DivStyle>
      <ParaStyle>BUCKETLIST - 2019</ParaStyle>
    </div>
  );
}
