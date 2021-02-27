import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://eskipaper.com/images/metal-wallpaper-11.jpg"
          className=""
          alt=""
        />
      </div>
      <div>ava</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
