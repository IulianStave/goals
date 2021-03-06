import React from "react";
import "../styles/App.css";
import InputForm from "./InputForm";
import List from "./List";

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
          pendingItem={this.state.pendingItem}
        />

        {/* <div> {this.state.pendingItem}</div> */}
        <List handleRemove={this.handleRemove} list={this.state.list} />
      </div>
    );
  }

  handleGoalInput = (e) => {
    this.setState({ pendingItem: e.target.value });
  };

  newItemSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.pendingItem === "") {
      return;
    } else {
      //console.log("not empty");

    }
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

  handleRemove = (index) => {
    const newState = this.state.list.filter(
      (item) => this.state.list.indexOf(item) !== index
    );

    this.setState({
      list: newState,
    });
  };
}

export default App;
