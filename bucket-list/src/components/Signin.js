import React, { useEffect } from "react";
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

// function SignIn(touched, errors) {
//   return (
//     <div>
//       <DivStyle>
//         <HeaderStyle>Sign In</HeaderStyle>
//         <Form>
//           <FormDiv>
//             {touched.username && errors.username && <p>{errors.username}</p>}
//             <Field
//               className="userInfo"
//               type="text"
//               name="username"
//               placeholder="Username or email"
//             />
//             {touched.password && errors.password && <p>{errors.password}</p>}
//             <Field
//               className="userInfo"
//               type="password"
//               name="password"
//               placeholder="Password"
//             />
//             <Button type='submit' color="success">Sign In</Button>

//           </FormDiv>
//         </Form>
//       </DivStyle>
//       <ParaStyle>BUCKETLIST - 2019</ParaStyle>
//     </div>
//   );
// }
const Login = ({
  touched,
  errors,
  status,
  setToken,
  setWelcomeMessage,
  setUserID
}) => {
  useEffect(() => {
    if (status) {
      setToken(status.token);
      setWelcomeMessage(status.message);
      setUserID(status.userID);
    }
  }, [status]);

  return (
    <div textAlign="center" >
      <DivStyle>
      <HeaderStyle>Sign In</HeaderStyle>
        <Form>
          <FormDiv>
            <div className="ui fluid input">
              <Field type="username" name="username" placeholder="Username" />
            </div>
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}

            <div className="ui fluid input">
              <Field type="password" name="password" placeholder="Password" />
            </div>
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}

            <Button type="submit" fluid>
              Login
            </Button>
            </FormDiv>
        </Form>

        </DivStyle>
        <ParaStyle>BUCKETLIST - 2019</ParaStyle>
    </div>
  );
};


// const SignInFormikForm = withFormik({
//   mapPropsToValues({ firstName, lastName, username, password }) {
//     return {
//       firstName: firstName || "",
//       lastName: lastName || "",
//       username: username || "",
//       password: password || ""
//     };
//   },


//   validationSchema: Yup.object().shape({
//     firstName: Yup.string().required("Please enter your first name"),
//     lastName: Yup.string().required("Please enter your last name"),
//     username: Yup.string().required("Please enter a username"),
//     password: Yup.string().required("Please enter a password")
//   }),
//   handleSubmit(values, { setStatus, resetForm }) {
//     axios
//       .post("https://wunderlist-2.herokuapp.com/api/auth/register", values)
//       .then(res => {
//         console.log(res);
//         resetForm();
//       });
//   }
// })(SignIn);

const formikFormSignIn = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Enter your username"),
    password: Yup.string().required("Enter your password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://bw-bucketlist.herokuapp.com/api/users/login/", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
        
      })
    
      .catch(err => console.error(err));
      console.log(values)
  }
})(Login);



export default formikFormSignIn;