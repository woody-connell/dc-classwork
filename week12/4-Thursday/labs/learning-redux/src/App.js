import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    counter: state.count
  }
}



export default App;
