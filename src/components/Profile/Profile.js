import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={s.img}>
        <img
          src="https://eskipaper.com/images/metal-wallpaper-11.jpg"
          className=""
          alt=""
        />
      </div>
      <div>ava</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
