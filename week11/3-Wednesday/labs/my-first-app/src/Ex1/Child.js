import React from 'react';
import Grandchild from  './Grandchild';

const Child = (props) => {
  return (
    <>
      <h1>I am Child</h1>
      <h1>{props.firstName}</h1>
      <Grandchild firstName="unkown"/>
      
    </>
  )
}

export default Child;