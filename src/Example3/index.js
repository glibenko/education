import React, { Component } from 'react';
import './App.css';

class Example3 extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0,
  }

  onClick = (isEqual, value1, value2, value3, proposedAnswer) => {
    const sumEqual = (value1 + value2 + value3) === proposedAnswer;
    if (
      (isEqual && sumEqual) || (!isEqual && !sumEqual)
    ) {
      this.setState((prevState) => ({
        numCorrect: prevState.numCorrect + 1
      }))
    }

    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1
    }))
  }

  render() {
    const { numCorrect, numQuestions} = this.state;
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.onClick(true, value1, value2, value3, proposedAnswer)}>True</button>
          <button onClick={() => this.onClick(false, value1, value2, value3, proposedAnswer)}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default Example3;
