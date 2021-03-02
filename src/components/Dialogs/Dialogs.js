import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Oscar1' },
    { id: 2, name: 'Oscar2' },
    { id: 3, name: 'Oscar3' },
    { id: 4, name: 'Oscar4' },
    { id: 5, name: 'Oscar5' },
  ];

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello!' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo!' },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
