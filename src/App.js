import React, { useState } from 'react';
import Contacts from './Contacts/index';
import Example1 from './Example1/index';
import Example2 from './Example2/index';
import Example3 from './Example3/index';
import Example4 from './Example4/index';
import Example5 from './Example5/index';
import Example6 from './Example6/index';
import Example7 from './Example7/index';
import Example8 from './Example8/index';


import './App.css';

function App() {
  const [list, setList] = useState([
    {show: false}, {show: false}, {show: false}, {show: false},
    {show: false}, {show: false}, {show: false}, {show: false},  {show: true}
  ]);

  const onClick = (id) => {
    const newList = list.map((el, i) => i === id ? {show: true} : {show: false});
    setList(newList);
  }


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, padding: 20 }}>
        <button disabled={list[0].show} onClick={() => {onClick(0)}}> Contacts </button>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
          <button key={el} disabled={list[el].show} onClick={() => {onClick(el)}}> Example{el} </button>
        ))}
      </div>
      {list[0].show && <Contacts />}
      {list[1].show && <Example1 />}
      {list[2].show && <Example2 />}
      {list[3].show && <Example3 />}
      {list[4].show && <Example4 />}
      {list[5].show && <Example5 />}
      {list[6].show && <Example6 />}
      {list[7].show && <Example7 />}
      {list[8].show && <Example8 />}
    </div>
  );
}

export default App;
