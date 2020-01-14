import React from 'react';

export default function List({ contacts, remove }){
  return (
    <ol className="contact-list">
      {contacts.map((el) => (
        <li key={el.id} className="contact-list-item">
          <div
            className="contact-avatar"
            style={{ backgroundImage: `url(${el.avatarURL})`}}
          />
          <div className="contact-details">
            <p>{el.name}</p>
            <p>{el.handle}</p>
          </div>
          <button onClick={() => remove(el)} className="contact-remove">
            Remove
          </button>
        </li>
      ))}
    </ol>
  )
}