import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as API from './api';

import './index.css';

class Contacts extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    API.getAll().then((contacts) =>
      this.setState({ contacts })
    )
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <ListContacts contacts={contacts} getAll={this.getAll}/>
      </div>
    )
  }
}

export default Contacts;
