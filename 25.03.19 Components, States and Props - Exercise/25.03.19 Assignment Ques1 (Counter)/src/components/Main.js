import React, { Component } from 'react';
import Counter from './Counter';

class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
        counter: 0,
        action: ""
      }
    }
  
    incrementAllCounters = () => {
      this.setState({
        action: "increase",
        counter: this.state.counter + 1
      });
    }
  
    decrementAllCounters = () => {
      this.setState({
        action: "decrease",
        counter: this.state.counter - 1
      });
    }


    render() {
      const { action } = this.state;
      return (
        <main>
          <Counter action={action} />
          <Counter action={action} />
          <Counter action={action} />
          <button className="counter-btn" onClick={this.incrementAllCounters}>Increment All + </button>
          <button className="counter-btn" onClick={this.decrementAllCounters}>Decrement All - </button>
        </main>
      );
    }
  }
  
  export default Main;