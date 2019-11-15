import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
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

function SignUp() {
  return (
    <div>
      <DivStyle>
        <HeaderStyle>Sign In</HeaderStyle>
        <Form>
          <FormDiv>
            <Field
              className="userInfo"
              type="text"
              name="firstName"
              placeholder="First Name"
            />

            <Field
              className="userInfo"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />

            <Field
              className="userInfo"
              type="text"
              name="username"
              placeholder="Username or email"
            />
            <Field
              className="userInfo"
              type="password"
              name="password"
              placeholder="Password"
            />
            <button className="signInButton">Sign In</button>
          </FormDiv>
        </Form>
      </DivStyle>
      <ParaStyle>BUCKETLIST - 2019</ParaStyle>
    </div>
  );
}

const FormikSignUpForm = withFormik({
  mapPropsToValues({ firstName, lastName, username, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Please enter a password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://wunderlist-2.herokuapp.com/api/auth/register", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      });
  }
})(SignUp);

export default FormikSignUpForm;
