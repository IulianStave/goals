import React from "react";
//<ListItem key={index} item={item.goal}/>

const ListItem = (props) => {
  return (
    <li>
      {props.item}
      <button className="action" onClick={
          () => {props.handleRemove(props.itemIndex)}
        }>
        x
      </button>
    </li>)
    ;
};

export default ListItem;
