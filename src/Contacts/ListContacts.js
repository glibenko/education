import React, { Component } from 'react';
import * as API from './api';

class ListContacts extends Component {

  remove = async (el) => {
    await API.remove(el);
    this.props.getAll();
  } 

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
            <button onClick={() => this.remove(el)} className="contact-remove">
              Remove
            </button>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts;