import React from "react";
import { connect } from "react-redux";
import { createList, updateList } from "../../actions/listHandlers";
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

function EditForm(props) {
  const [form, setForm] = React.useState({
    title: "",
  });

  const updateBucketList = e => {
    e.preventDefault();
    props.updateList(props.list_id, form);
  }

  const handleChanges = e => {
    //event object
    setForm({ ...form, [e.target.name]: e.target.value }); //uses the spread operator to update the keys on our state object. It changes the value of title or pw one key at a time.
  };

  return (
    <div textAlign="center">
      <DivStyle>
        <FormDiv>
          <HeaderStyle>Edit BucketList</HeaderStyle>

          <form onSubmit={updateBucketList}>
            {" "}
            {/* onsubmit calls the method login  */}
            <div className="ui fluid input">
              <input
                name="title"
                type="text"
                value={form.title}
                onChange={handleChanges}
                placeholder="title"
              />
            </div>
            <Button style={buttonStyle} type="submit" fluid>
              Submit
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
  createList,
  updateList
};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
