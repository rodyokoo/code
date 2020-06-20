import React, { Component } from 'react';
import css from './header.module.css';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newSalary = event.target.value;
    this.props.onChangeSalary(newSalary);
  };
  render() {
    const { salary, inss, inssDes, irff, irffDes, salaryDes } = this.props;
    return (
      <div>
        <div className={css.salario}>
          <h2>React Salário</h2>
          <h3>Salário Bruto</h3>
          <input
            type="number"
            value={salary}
            onChange={this.handleInputChange}
          />
        </div>
        <div className={css.result}>
          <span>
            Base INSS: R$
            {inss}
          </span>
          <span>
            Desconto INSS: R$ {inssDes} ({(inssDes / inss) * 100})%
          </span>
          <span>
            Base IRFF: R$
            {irff}
          </span>
          <span>
            Desconto IRFF: R$
            {irffDes}
          </span>
          <span>
            Salário Líquido: R$ {salaryDes} ({(salaryDes / inss) * 100}%)
          </span>
        </div>
      </div>
    );
  }
}
