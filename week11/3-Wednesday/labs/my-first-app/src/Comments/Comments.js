import React, { Component } from 'react';
import CommentStyle from './CommentStyle';
import commentData from './commentData';


class Comments extends Component {
  render() {

    let commentArr = commentData.map(comments =>{
      return <CommentStyle commentImage={comments.img} commentName={comments.name} commentDescription={comments.description} />
    })

    return (
      <>
        <comentArr />
      </>
    )
  }
}

export default Comments;
