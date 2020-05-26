import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <ul>
      {props.list.map((item, index) => (
        // <li key={index}>{item.goal}</li>
        <ListItem
          key={index}
          item={item.goal}
          itemIndex={index}
          handleRemove={props.handleRemove}  
        />
      ))}
    </ul>
  );
};

export default List;
