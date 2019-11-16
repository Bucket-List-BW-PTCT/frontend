import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "reactstrap";

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

function SignIn(touched,errors) {
  return (
    <div>
      <DivStyle>
        <HeaderStyle>Sign In</HeaderStyle>
        <Form>
          <FormDiv>
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
            <Button 
            type="submit"
            color="success">Sign In</Button>

          </FormDiv>
        </Form>
      </DivStyle>
      <ParaStyle>BUCKETLIST - 2019</ParaStyle>
    </div>
  );
}

const SignInFormikForm = withFormik({
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
      .get("https://bucketlist-builds.herokuapp.com/users", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      });
  }
})(SignIn);
export default SignInFormikForm;
