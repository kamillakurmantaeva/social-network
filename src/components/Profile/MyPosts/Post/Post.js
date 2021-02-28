import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://images.vexels.com/media/users/3/137577/isolated/preview/75b3c8a4aba24222274e4ea2f2aa52ab-cube-geometric-abstract-logo-by-vexels.png"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
