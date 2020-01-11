import React, { useState } from 'react';
import Contacts from './Contacts/index';
import Example1 from './Example1/index';
import Example2 from './Example2/index';
import Example3 from './Example3/index';

import './App.css';

function App() {
  const [list, setList] = useState([
    {show: false}, {show: false}, {show: false}, {show: true}
  ]);

  const onClick = (id) => {
    const newList = list.map((el, i) => i === id ? {show: true} : {show: false});
    setList(newList);
  }


  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, padding: 20 }}>
        <button disabled={list[0].show} onClick={() => {onClick(0)}}> Contacts </button>
        <button disabled={list[1].show} onClick={() => {onClick(1)}}> Example1 </button>
        <button disabled={list[2].show} onClick={() => {onClick(2)}}> Example2 </button>
        <button disabled={list[3].show} onClick={() => {onClick(3)}}> Example3 </button>
      </div>
      {list[0].show && <Contacts />}
      {list[1].show && <Example1 />}
      {list[2].show && <Example2 />}
      {list[3].show && <Example3 />}
    </div>
  );
}

export default App;
