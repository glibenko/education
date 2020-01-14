import React, { Component } from 'react';
import * as API from './api';
import List from './List';
import Search from './Search';

class ListContacts extends Component {
  state = {
    contacts: [],
    query: '',
    filtredContacts: [],
  }

  componentDidMount() {
    API.getAll().then((contacts) =>
      this.setState({ contacts, filtredContacts: contacts })
    )
  }

  remove = (el) => {
    API.remove(el).then((contact) => {
      this.setState((prevState) => 
        ({contacts: prevState.contacts.filter(el => el.id !== contact.id) })
      )
    })
  }

  handleSearch = (e) => {
    const { contacts } = this.state;
    // i think it's better
    const showingContacts = e.target.value === ''
      ? contacts
      : contacts.filter((c) => (
          c.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))

    this.setState({ query: e.target.value, filtredContacts: showingContacts});

  }

  clearQuery = () => {
    const { contacts } = this.state;
    this.setState({ query: '', filtredContacts: contacts })
  }

  render() {
    const { contacts, query, filtredContacts } = this.state;
    const { match } = this.props;

    // filter at course
    // const showingContacts = query === ''
    //   ? contacts
    //   : contacts.filter((c) => (
    //       c.name.toLowerCase().includes(query.toLowerCase())
    //     ))

    return (
      <div>
        <Search query={query} onChange={this.handleSearch} match={match} />
        <List contacts={filtredContacts} remove={this.remove} />
        {filtredContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {filtredContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
      </div>
    )
  }
}

export default ListContacts;