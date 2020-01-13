import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts';
import AddContact from './AddContact';
import * as API from './api';

import './index.css';

class Contacts extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    API.getAll().then((contacts) =>
      this.setState({ contacts })
    )
  }

  remove = (el) => {
    API.remove(el).then((contact) => {
      this.setState((prevState) => 
        ({contacts: prevState.contacts.filter(el => el.id !== contact.id) })
      )
    })
  } 

  render() {
    const { contacts } = this.state;

    console.log(this.props)

    return (
      <div style={{ width: 800, margin: 'auto' }}>
        <Route path='/contacts/add' render={() => (
          <AddContact
            contacts={contacts}
            getAll={this.getAll}
            remove={this.remove}
          />
        )} />
        <Route exact path='/contacts' render={() => (
          <ListContacts
            contacts={contacts}
            getAll={this.getAll}
            remove={this.remove}
          />
        )} />
      </div>
    )
  }
}

export default Contacts;
