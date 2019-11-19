import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
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

const ParaStyle = styled.p`
  text-align: center;
  color: grey;
  font-size: 1.2rem;
`;

const HeaderStyle = styled.h2`
  color: grey;
`;

function Login(props) {
  const [form, setForm] = React.useState({  //sets state of the form to empty fields
    username: '',   //user name is empty
    password: ''  //password is empty
  });
  const login = e => {
    e.preventDefault();  //method stops the default action of an element from happening. For example: Prevent a submit button from submitting a form. 
    axiosWithAuth() //axioswithauth method that has been imported
      .post('https://bw-bucketlist.herokuapp.com/api/users/login', form)  //talks to the back-end and calls the url and sends the values of form.
      .then(res => {
        console.log(res); //console logs the response
        localStorage.setItem('token', res.data.payload); //The payload is the body of your post request. The body is the second parameter (user) you are sending in with:
      })
      .catch(err => { //catches an error, the block of code below is to be executed if an error occurs.
        console.log(err.response); //console logs the error response
        setForm({   //sets state of the form to empty fields after a bad request.
          username: '', //user name is empty
          password: '' //password is empty
        });
      }); 
  };
  const handleChanges = e => { //event object
    setForm({ ...form, [e.target.name]: e.target.value });  //uses the spread operator to update the keys on our state object. It changes the value of username or pw one key at a time.
    console.log(form); //console logs each keystore, can be removed.
  };

  return (
    <div textAlign='center'>
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Log In</HeaderStyle>

          <form onSubmit={login}>    {/* onsubmit calls the method login  */}
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
                name='password' //input name
                type='text' //input type
                value={form.password} //the value of the input
                onChange={handleChanges} //anytime the field changes it will call handlechanges which uses a method to input each keystroke
                placeholder='Password' //input placeholder
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

export default Login;
