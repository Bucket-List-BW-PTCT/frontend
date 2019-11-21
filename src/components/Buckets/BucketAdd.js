import React from 'react';
import { connect } from 'react-redux';
import { createList } from '../../actions/listHandlers';
import styled from 'styled-components';
import { Button } from 'reactstrap';

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

function AddBucketItem(props) {
  const [form, setForm] = React.useState({
    //sets state of the form to empty fields
    title: '',
    user_id: 1 //user name is empty
    // description: "" //description is empty
  });

  const addBucketList = e => {
    e.preventDefault();  //method stops the default action of an element from happening. For example: Prevent a submit button from submitting a form. 
    props.createList(form)
    console.log(form)
    setForm({
      title: '',
    //   description: ''
    })
  };

  const handleChanges = e => { //event object
    setForm({ ...form, [e.target.name]: e.target.value });  //uses the spread operator to update the keys on our state object. It changes the value of title or pw one key at a time.
  };

  return (
    <div textAlign="center">
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Add to BucketList</HeaderStyle>

          <form onSubmit={addBucketList}>
            {" "}
            {/* onsubmit calls the method login  */}
            <div className="ui fluid input">
              <input
                name="title"
                type="text"
                value={form.item_name}
                onChange={handleChanges}
                placeholder="title"
              />
            </div>
            
            <Button style={buttonStyle} type="submit" fluid>
              Add Bucket
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
    userInfo: {...state.userInfo}
  }
}

const mapDispatchToProps= {
  createList
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBucketItem);