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

function Signup(errors, touched) {
  return (
    <div>
      <DivStyle>
        <HeaderStyle>Sign Up</HeaderStyle>
        <Form>
          <Field
            className="userInfo"
            type="text"
            name="firstName"
            placeholder="Enter First Name"
          />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
          <Field
            className="userInfo"
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
          />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field
            className="userInfo"
            type="text"
            name="username"
            placeholder="Username or email"
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            className="userInfo"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="signInButton" type="submit">
            Sign In
          </button>
          <FormDiv />
        </Form>
      </DivStyle>
      <ParaStyle>BUCKETLIST - 2019</ParaStyle>
    </div>
  );
}

const FormikSignInForm = withFormik({
  mapPropsToValues({ username, password, firstname, lastname }) {
    return {
      firstname: firstname || "",
      lastname: lastname || "",
      username: username || "",
      password: password || ""
    };
  },

  // Validation Schema
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required("Must enter first name"),

    lastname: Yup.string().required("Must enter first name"),

    username: Yup.string()
      .email("Invalid Username")
      .required("Username Required"),

    password: Yup.string()
      .min(6)
      .required("Password is required")
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://bw-bucketlist.herokuapp.com/api", values)
      .then(res => {
        setStatus(res.data);
        console.log(`Our data:`, res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(Signup);

export default FormikSignInForm;
