import React from 'react';
import Window from './Window';
import Addmessage from './Addmessage';

export default function User({ message, name, onSubmit }) {
  return (
    <div>
      <p> chat room of {name}</p>
      <Window message={message} name={name} />
      <Addmessage onSubmit={onSubmit} name={name} />
    </div>
  )
}

