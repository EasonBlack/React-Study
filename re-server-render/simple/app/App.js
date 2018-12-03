import React, { Component } from 'react';

export default class App extends Component {
  _onModifyUser(){
    alert("hello world");
  }

  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <button onClick={this._onModifyUser.bind(this)}>hello world {isMobile ? 'mobile' : 'desktop'}</button>
      </div>
    );
  }
}
