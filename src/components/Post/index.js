import React, { useEffect, useState } from 'react';

import Comment from './components/Comment';

import './styles.css';
import api from '../../services/api';

const Post = (props) => {

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await api.get('comments');

    setComments(response.data)
  }

  useEffect(() => {
    getComments();
  }, [])



  return (
    <article>
      <div id="title-and-body">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        {
          comments.map((comment) => {
            if (comment.postId === props.id) {
              return <Comment key={comment.id} profilePic={comment.profilePic} comment={comment.comment} />
            } else {
              return false;
            }
          })
        }
      </div>
      <div id="image">
        <img src={props.imageURL} alt={props.title} />
      </div>
    </article>
  )
}

export default Post;