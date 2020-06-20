import React, { Component } from 'react';
import Header from './components/header/Header';
import { calculateSalaryFrom } from './components/helper/salary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      salary: '',
    };
  }

  handleChangeSalary = (newSalary) => {
    this.setState({
      salary: newSalary,
    });
    const table = calculateSalaryFrom(newSalary);
    const inss = table.baseINSS;
    const inssDes = table.discountINSS;
    const irff = table.baseIRPF;
    const irffDes = table.discountIRPF;
    const salaryDes = table.netSalary;
    this.setState({
      inss,
      inssDes,
      irff,
      irffDes,
      salaryDes,
    });
  };

  render() {
    const { salary, inss, inssDes, irff, irffDes, salaryDes } = this.state;
    return (
      <div>
        <Header
          salary={salary}
          onChangeSalary={this.handleChangeSalary}
          inss={inss}
          inssDes={inssDes}
          irff={irff}
          irffDes={irffDes}
          salaryDes={salaryDes}
        />
      </div>
    );
  }
}
