import React from "react";
import { connect } from "react-redux";
import { signin, getUser } from "../actions/auth";
import styled from "styled-components";
import { Button } from "reactstrap";

const DivStyle = styled.div`
  margin: 10px auto;
  width: 450px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 7px #888888;
`;

const buttonStyle = {
  color: "white",
  background: "green",
  width: "200px",
  margin: "10px auto",
  borderRadius: "10px",
  boxShadow: "4px 4px 7px #888888"
};

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin: 5px auto;
`;

const HeaderStyle = styled.h2`
  color: green;
`;

function Login(props) {
  const [form, setForm] = React.useState({
    //sets state of the form to empty fields
    username: "", //user name is empty
    password: "" //password is empty
  });

  const login = e => {
    e.preventDefault(); //method stops the default action of an element from happening. For example: Prevent a submit button from submitting a form.
    props.signin(form);
    setForm({
      username: "",
      password: ""
    });
    props.getUser(props.userInfo.id);
  };

  const handleChanges = e => {
    //event object
    setForm({ ...form, [e.target.name]: e.target.value }); //uses the spread operator to update the keys on our state object. It changes the value of username or pw one key at a time.
  };

  return (
    <div textAlign="center">
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Log In</HeaderStyle>

          <form onSubmit={login}>
            {" "}
            {/* onsubmit calls the method login  */}
            <div className="ui fluid input">
              <input
                name="username"
                type="text"
                value={form.username}
                onChange={handleChanges}
                placeholder="UserName"
                required
              />
            </div>
            <div className="ui fluid input">
              <input
                name="password" //input name
                type="text" //input type
                value={form.password} //the value of the input
                onChange={handleChanges} //anytime the field changes it will call handlechanges which uses a method to input each keystroke
                placeholder="Password" //input placeholder
                required
              />
            </div>
            <Button style={buttonStyle} type="submit" fluid>
              Login
            </Button>
          </form>
        </FormDiv>
      </DivStyle>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ...state,
    userInfo: { ...state.userInfo }
  };
}

const mapDispatchToProps = {
  signin,
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
