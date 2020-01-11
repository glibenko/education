import React, { Component } from 'react';

export default class AddItem extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(value);
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={this.handleChange}
        />
        <button disabled={!value.length}>Add</button>
      </form>
    )
  }
}