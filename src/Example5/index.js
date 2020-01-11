import React from 'react';
import ItemsList from './ItemsList';
import AddItem from './AddItem';

export default class Example5 extends React.Component {
  state = {
    items: [],
  };

  addItem = val => {
    this.setState(oldState => ({
      items: [...oldState.items, val],
    }));
  }

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <h2>Shopping List</h2>
        <AddItem
          onChange={this.handleChange}
          onSubmit={this.addItem}
        />
        <button onClick={this.deleteLastItem} disabled={!items.length}>
          Delete Last Item
        </button>
        <ItemsList items={items}/>
      </div>
    );
  }
}

