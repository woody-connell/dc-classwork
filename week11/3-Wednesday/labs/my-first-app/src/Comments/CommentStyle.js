import React from 'react';
import {Media} from 'react-bootstrap';

const CommentStyle = (props) => {
  return (
    <>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={props.img}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>{props.name}</h5>
          <p>
            {props.description}
          </p>
        </Media.Body>
      </Media>
    </>
  )
}

export default CommentStyle;





























