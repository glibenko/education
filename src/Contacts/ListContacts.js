import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    const {contacts} = this.props;
    return (
      <ol className="contact-list">
        {contacts.map((el) => (
          <li key={el.id} className="contact-list-item">
            <div
              className="contact-avatar"
              // style={{ backgroundImage: `url(${el.avatarURL})`}}
            />
            <div className="contact-details">
              <p>{el.name}</p>
              <p>{el.handle}</p>
            </div>
            <button className="contact-remove">
              Remove
            </button>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts;