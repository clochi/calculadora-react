import React from 'react';
import Controles from './controles';
import Lista from './Lista';

export default class Calculadora extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monto: '',
      tna: ''
    };
    this.updateValues = this.updateValues.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.results;
    this.Meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
  }
  updateValues(e){
    if(isNaN(e.target.value)) return false;
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  handleForm(e){
    e.preventDefault();
    if(this.state.monto == '' | this.state.tna == '') return false;
    var total;
    this.results = this.Meses.map((item) => {
      total += (this.state.monto * this.state.tna / 100) / 12;
      return {mes: item, total: total};
    }, this);
  }
  render(){
    return(
      <div>
        <h1>Calcular ganancias</h1>
        <Controles
          change={this.updateValues}
          state={this.state}
          calcular={this.handleForm}
        />
        <Lista result={this.results}/>
      </div>
    );
  }
}
