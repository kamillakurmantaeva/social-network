import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>Dim</div>
        <div className={s.dialog}>Oscar</div>
        <div className={s.dialog}>Oscar</div>
        <div className={s.dialog}>Oscar</div>
        <div className={s.dialog}>Oscar</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi</div>
      </div>
    </div>
  );
};

export default Dialogs;
