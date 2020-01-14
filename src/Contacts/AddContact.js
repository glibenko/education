import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize'
import * as API from './api';
import ImageInput from './ImageInput'

export default class AddContact extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = serializeForm(e.target, { hash: true });
    API.create(contact);
    this.props.history.push('/contacts')
  }

  render() {
    return (
      <div>
        <Link
          className='close-create-contact'
          to='/contacts'>
            Close
        </Link>
        <form onSubmit={this.handleSubmit} className='create-contact-form'>
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' />
            <input type='text' name='handle' placeholder='Handle' />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}
