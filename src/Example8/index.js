import React from 'react';

class Pure extends React.PureComponent {
  // don't use props in constructor
  // constructor() {
  //   // super(props);
  //   // this.state = {
  //   //   update: props.toggle,
  //   // };
  //   super();
  //   this.state = {
  //     lala: 'fds'
  //   }
  // }
  

  render() {
      console.log(this.props)
    return (
      <strong>
        <span style={{ color: 'mediumseagreen' }}>Pure: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

const Stateless = props => (
  <strong>
    <span style={{ color: 'orange' }}>Stateless: </span>
    {new Date().getSeconds().toString()}
  </strong>
);

class Normal1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      update: props.toggle,
    };
  }

  render() {
    return (
      <strong>
        <span style={{ color: 'dodgerblue' }}>Normal1: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class Normal2 extends React.Component {
  state = {
    update: this.props.toggle,
  };

  render() {
    return (
      <strong>
        <span style={{ color: 'green' }}>Normal2: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class Normal3 extends React.PureComponent {
  render() {
    return (
      <strong>
        <span style={{ color: 'red' }}>Normal3: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class Exapmple8 extends React.Component {
  state = { toggle: true };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      // this.setState({ toggle: true });
      this.setState(prevState => ({ toggle: !prevState.toggle }));
      // this.setState({ toggle: !this.state.toggle })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <Pure toggle={toggle} />
        <br />
        <Stateless toggle={toggle} />
        <br />
        <Normal1 toggle={toggle} />
        <br />
        <Normal2 toggle={toggle} />
        <br />
        <Normal3 />
        <br />
      </div>
    );
  }
}

export default Exapmple8;
