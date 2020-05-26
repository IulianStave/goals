import React from "react";
import "../styles/App.css";

const InputForm = (props) => {
  return (
    <form onSubmit={props.newItemSubmitHandler} className="goalsInput">
      <input
        type="text"
        value={props.pendingItem}
        placeholder="What is your goal?"
        onChange={props.handleGoalInput}
      />
      <button type="submit" name="submit" value="submit">
        add
      </button>
    </form>
  );
};
export default InputForm;
