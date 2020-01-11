import React from 'react';

export default function ItemList({ items }) {
  return (
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>
  )
}