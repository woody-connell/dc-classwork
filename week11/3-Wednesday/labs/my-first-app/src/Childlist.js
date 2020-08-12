import React, { Component } from 'react';


class Childlist extends Component {
  render() {
    return (
      <>
        I am Childlist
        {this.props.name}
      </>
    )
  }
}

export default Childlist;
