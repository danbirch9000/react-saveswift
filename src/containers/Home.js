import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("[Home.js] componentDidMount", this.props);
  }

  render() {
    let output = "";
    output = (
      <div>
        <h3>Super simple savings tracker</h3>
        <div className="row">
          <div className="column">Record and see your savings
              grow over time</div>
          <div className="column">Set a goal and track how your
              savings build against your goal</div>
          <div className="column">See the effect compound interest
              has on your savings</div>
        </div>
      </div>
    );
    return output;
  }
}


export default Home;