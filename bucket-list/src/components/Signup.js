import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'reactstrap';

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

const HeaderStyle = styled.h2`
  color: grey;
`;

function Registration(props) {
  const [form, setForm] = React.useState({
    username: "",
    password: ""
  });
  const registration = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://bw-bucketlist.herokuapp.com/api/users/register", form)
      .then(res => {
        console.log(res);
        // localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err.response);
        setForm({
          username: "",
          password: ""
        });
      });
  };
  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div textAlign='center'>
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Sign Up</HeaderStyle>

          <form onSubmit={registration}>
            <div className='ui fluid input'>
              <input
                name='username'
                type='text'
                value={form.username}
                onChange={handleChanges}
                placeholder='UserName'
              />
            </div>
            <div className='ui fluid input'>
              <input
                name='email'
                type='text'
                value={form.email}
                onChange={handleChanges}
                placeholder='Email'
              />
            </div>
            <div className='ui fluid input'>
              <input
                name='password'
                type='text'
                value={form.password}
                onChange={handleChanges}
                placeholder='Password'
              />
            </div>
            <Button type='submit' fluid>
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
    ...state
  }
}

export default connect(mapStateToProps)(Registration);
