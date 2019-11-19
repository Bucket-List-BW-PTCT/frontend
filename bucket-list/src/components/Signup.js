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

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 5px auto;
`;

const ParaStyle = styled.p`
  text-align: center;
  color: grey;
  font-size: 1.2rem;
`;

const HeaderStyle = styled.h2`
  color: grey;
`;

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (values, { setStatus, resetForm }) => {
    axios
      .post("https://bw-bucketlist.herokuapp.com/api/users/register/", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      });
  };

  return (
    <div>
      <DivStyle>
        <HeaderStyle>Sign Up</HeaderStyle>
        <form onSubmit={handleSubmit}>
          <FormDiv>
            <label>
              <input
                type="text"
                name="username"
                className="userInfo"
                placeholder="Username"
                onChange={handleChanges}
              />
            </label>

            <input
              className="userInfo"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChanges}
            />
            <button type="submit" className="signInButton">
              Sign In
            </button>
          </FormDiv>
        </form>
      </DivStyle>
      <ParaStyle>BUCKETLIST - 2019</ParaStyle>
    </div>
  );
}
