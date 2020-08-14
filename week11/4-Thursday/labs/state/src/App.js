import React, { Component } from 'react';
import Button from './Button';

class App extends Component {

  constructor(props) {


    super()

    this.state = {
      text: 'this is a text value',
      count: 0
    }
  }

  handleClick = () => {
    console.log('Button was clicked.');
    console.log(`${Date.now()}`);
    
    
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.txt}</h1>
        <br />
        <button onClick={this.handleClick}>ClickMe {this.state.count}</button>
      </>
    )
  }
}

export default App;
