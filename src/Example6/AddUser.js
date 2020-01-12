import React, { Component } from 'react';
import Field from './Field';

export default class AddItem extends Component {
  state = {
    user_name: '',
    first_name: '',
    last_name: '',
    error: ''
  }

  handleChange = event => {
    const { value, name } = event.target;
    if (name === 'user_name') {
      this.setState({ [name]: value, error: '' });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event) => {
    const { user_name, first_name, last_name } = this.state;
    const { onSubmit, users} = this.props;
    event.preventDefault();
    const userExist = users.find(el => el.user_name === user_name);
    if (userExist) {
      this.setState({ error: 'user already exist' })
    } else {
      onSubmit({ user_name, first_name, last_name });
      this.setState({
        user_name: '',
        first_name: '',
        last_name: '',
        error: ''
      })
    }
    // onSubmit(value);
    // this.setState({ value: '' })
  }

  render() {
    const { user_name, first_name, last_name, error } = this.state;
    const disabled = !user_name.length || !first_name.length || !last_name.length;
    return (
      <form onSubmit={this.handleSubmit}>
        <Field
          error={error}
          placeholder="Enter user name"
          name="user_name"
          value={user_name}
          onChange={this.handleChange}
        />
        <Field
          placeholder="Enter first name"
          name="first_name"
          value={first_name}
          onChange={this.handleChange}
        />
        <Field
          placeholder="Enter last name"
          name="last_name"
          value={last_name}
          onChange={this.handleChange}
        />
        <button disabled={disabled}>Add</button>
      </form>
    )
  }
}