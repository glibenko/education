import React from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts';
import AddContact from './AddContact';

import './index.css';

export default function Contacts({ match }) {
  return (
    <div style={{ width: 800, margin: 'auto' }}>
      <Route path={`${match.path}/add`} component={AddContact} />
      <Route exact path={match.path} component={ListContacts}/>
    </div>
  )
}

