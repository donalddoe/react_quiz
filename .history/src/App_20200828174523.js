import React, { Component } from 'react';


// list the three data counters
const data = [
  { id: 1, value: 2 },
  { id: 2, value: 4 },
  { id: 3, value: 5 },
];

// Components counters named
class Counter extends Component {
  onIncrement = e => {
    this.props.onIncrement(1);
  };

  onDecrement = () => {
    this.props.onIncrement(-1);
  };
  render() {
    const { value } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={this.onDecrement} >-</button>
          <button className="button is-success is-small" onClick={this.onIncrement} >+</button>
        </div>
      </div>
      <div>
        Total: {this.state.}
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    

    // Globally data arrays 
    this.state = {
      data: [...data]
    }
  }

  onIncrement = (counter, increment) => {
    const newValue = counter.value + increment;
    this.setState({
      data: data.map(item => {
        item.value = item.id === counter.id ? newValue : item.value;
        return item;
      })
    });
  };

  render() {
    return (
      <div>
        {data.map((counter) => (
          <Counter key={counter.id} value={counter.value}
            onIncrement={this.onIncrement.bind(this, counter)} />
        ))}
      </div>
    );
  }
}

export default App;