import React, { Component } from 'react';
import Childlist from './Childlist';

class List extends Component {
  render() {
    return (
      <>
        I am List
        <Childlist name="Woody" />
      </>
    )
  }
}

export default List;
