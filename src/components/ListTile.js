import React from "react";

function ListTile(props) {
  return (
    <div className="list-card">
      <h3>{props.listName}</h3>
      {props.listItems.map(item => (
        <p>{item}</p>
      ))}
      <h5>Created By: {props.created_by}</h5>
    </div>
  );
}

export default ListTile;
