import React, { Component } from 'react';
import Days from './Days';

class Simplelist extends Component {
  render() {
    
    let daysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
      <>
        <Days days1={days}/>
      </>
    )
  }
}

export default Simplelist;
