import React from "react";

const InputForm = props => {
  return (
    <form onSubmit={props.newItemSubmitHandler} className="goalsInput">
      <input
        className="input"
        type="text"
        value={props.pendingItem}
        placeholder="Add aaaa goal"
        onChange={props.handleGoalInput}
      />
      <button
        type="submit" name="submit" value="submit">
        Add goal
          </button>
    </form>
  )
};
export default InputForm;