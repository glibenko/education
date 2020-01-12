import React, { Component } from 'react';

export default class Addmessage extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    const { onSubmit, name } = this.props;
    event.preventDefault();
    onSubmit({message : value, name});
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter message"
          value={value}
          onChange={this.handleChange}
        />
        <button disabled={!value.length}>Add</button>
      </form>
    )
  }
}