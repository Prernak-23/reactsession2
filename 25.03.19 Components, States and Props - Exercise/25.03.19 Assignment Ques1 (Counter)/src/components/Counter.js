import React, { Component } from 'react';


class Counter extends Component {
   constructor(props){
      super(props);
      this.state = {
         counter: 0,
         action: this.props.action
      }
   }

   incrementSingleCounter = () => {
      this.setState({
         counter: this.state.counter + 1
      });
   }

   decrementSingleCounter = () => {
      this.setState({
         counter: this.state.counter - 1
      });
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.action === "increase") {
         this.setState({
            counter: this.state.counter + 1
         })
      }
      else {
         this.setState({
            counter: this.state.counter - 1
         })
      }

   }

   render() {
      const { counter } = this.state;
      return (
            <div className="counterdiv">
               <p className="counter-value">{counter}</p>
               <button className="counter-btn" onClick={this.incrementSingleCounter}>+</button>
               <button className="counter-btn" onClick={this.decrementSingleCounter}>-</button>
            </div>
      )
   }
}

export default Counter;

