import React from 'react';
import { Link } from 'react-router-dom';

export default function Search({ query, onChange, match }) {
  return (
    <div style={{ display: 'flex' }}>
      <input
        className='search-contacts'
        type='text'
        placeholder='Search Contacts'
        value={query}
        onChange={onChange}
      />
      <Link
        to={`${match.url}/add`}
        className='add-contact'
        style={{ height: 73 }}
      >
        Add Contact
      </Link>
    </div>
  )
}
