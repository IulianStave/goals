import React from 'react';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingItem: ""
    };
  }
  render() {
    return (
      <div className="wrapper">
        <header>
          <h3>Goals</h3>
        </header>
        <form className="goalsInput">
          <input
            className="input"
            type="text"
            value={this.state.pendingItem}
            placeholder="Add an item"
            onChange={this.handleGoalInput}
          />
          <button
            type="submit" name="submit" value="submit">
            Add goal
          </button>
        </form>
        <div> {this.state.pendingItem}</div>

      </div>
    );
  }

  handleGoalInput = e => {
    this.setState({pendingItem: e.target.value})
   }
  }


export default App;