import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.img}>
        <img
          src="https://eskipaper.com/images/metal-wallpaper-11.jpg"
          className=""
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>ava</div>
    </div>
  );
};

export default ProfileInfo;
