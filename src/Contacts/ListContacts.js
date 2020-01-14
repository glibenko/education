import React, { Component } from 'react';
import * as API from './api';
import List from './List';
import Search from './Search';

class ListContacts extends Component {
  state = {
    contacts: [],
    query: ''
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

  handleSearch = (e) => {
    this.setState({ query: e.target.value })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { contacts, query } = this.state;
    const { match } = this.props;

    const showingContacts = query === ''
      ? contacts
      : contacts.filter((c) => (
          c.name.toLowerCase().includes(query.toLowerCase())
        ))

    return (
      <div>
        <Search query={query} onChange={this.handleSearch} match={match} />
        <List contacts={showingContacts} remove={this.remove} />
        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
      </div>
    )
  }
}

export default ListContacts;