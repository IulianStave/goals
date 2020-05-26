import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <li key={index}>{item.goal}</li>
        // <ListItem key={index} item={item.goal}/>
      ))}
    </ul>
  );
};

export default List;
