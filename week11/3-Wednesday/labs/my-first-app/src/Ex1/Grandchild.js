import React from 'react';


const Grandchild = (props) => {
  return (
    <>
      <h1>I am Grandchild</h1>
      <h1>{props.firstName}</h1>
    </>
  )
}

export default Grandchild;