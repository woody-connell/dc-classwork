import React from 'react';
import Child from  './Child';


const Parent = (props) => {
  return (
    <>
      <h1>I am Parent</h1>
      <h1>{props.firstName}</h1>
      <Child firstName="Woody"/>
    </>
  )
}

export default Parent;