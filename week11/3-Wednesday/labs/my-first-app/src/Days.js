import React, { Component } from 'react';

class Days extends Component {
  render() {

    let data = this.props.data1.map(day =>{
      return <li>{day}</li>
    })

    return (
      <>
        <ul>
          {data}
        </ul>
      </>
    )
  }
}

export default Days;
