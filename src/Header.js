import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  state = {
    message: 'The Movie App'
  }

  changeMessage = () => {
    this.setState({
      message: "New Message"
    })
  }

  render() {
    return (
      <header>
        <h1 onClick={this.changeMessage} >{this.state.message}</h1>
      </header>
    )
  }
}

export default Header;
