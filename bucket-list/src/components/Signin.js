import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const DivStyle = styled.div`
  margin: 10px auto;
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  box-shadow: 5px 5px 8px #888888;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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

const FieldDiv = styled.div``;

function SignIn() {
  return (
    <div>
      <DivStyle>
        <HeaderStyle>Sign In</HeaderStyle>
        <Form>
          <FormDiv>
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

const FormikSignInForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
  }
})(SignIn);

export default FormikSignInForm;
