
import React from 'react';
import {Button} from 'react-bootstrap';


function CalcStyle(props) {
  return (
    <>
      
      <Button variant="secondary" className={props.styleName}>{props.text}</Button>
    </>
  );
}

export default CalcStyle;