import React from 'react';

import './styles.css';

const Comment = (props) => {
  return (
    <section id="comment">
      <img src={props.profilePic} alt={props.comment} />
      <p>"{props.comment}"</p>
    </section>
  )
}

export default Comment;