import React, { Component } from 'react';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      salary: '',
    };
  }
  render() {
    return (
      <div>
        <h2>React Salário</h2>

        <Header />
      </div>
    );
  }
}
