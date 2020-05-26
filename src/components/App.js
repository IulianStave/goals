import React from "react";
import "../styles/App.css";
import InputForm from "./InputForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pendingItem: "",
    };
  }
  
  render() {
    return (
      <div className="wrapper">
        <header>
          <h3>Goals</h3>
        </header>
        <InputForm
          newItemSubmitHandler={this.newItemSubmitHandler}
          handleGoalInput={this.handleGoalInput}
          // pendingItem={this.state.pendingItem}
          value={this.state.pendingItem}
        />
        {/* <div> {this.state.pendingItem}</div> */}
      </div>
    );
  }

  handleGoalInput = (e) => {
    this.setState({ pendingItem: e.target.value });
  };

  newItemSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      list: [
        {
          goal: this.state.pendingItem,
        },
        ...this.state.list,
      ],
      pendingItem: "",
    });
  };
}

export default App;
