import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { salary } = this.props;
    return (
      <div>
        <h3>Salário Bruto</h3>
        <input type="number" value={salary} />
      </div>
    );
  }
}
