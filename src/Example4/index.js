import React, { Component } from 'react';

export default class Example4 extends Component {
  state = {
    text: '',
    mirror: '',
  }

  onChange = (e) => {
    const text = e.target.value;
    const mirror = text.length ? [...text].reverse().join('') : '';
    this.setState({ text, mirror })
  }


  render() {
    const { text, mirror} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            value={text}
            onChange={this.onChange}
            type="text"
            placeholder="Say Something" 
          />
          <p className="echo">Echo:</p>
          <p>This should mirror the text you typed into the input field.</p>
          {!!mirror.length && (
            <p>{mirror}</p>
          )}
        </div>
      </div>
    );
  }
}
