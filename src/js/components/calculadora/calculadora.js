import React from 'react';
import Controles from './controles';
import Lista from './lista';

export default class Calculadora extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monto: '',
      tna: '',
      results: undefined
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
    this.setState({[e.target.name]: e.target.value});
  }
  handleForm(e){
    e.preventDefault();
    if(this.state.monto == '' || this.state.tna == '') return false;
    var total = 0;
    var results = [];
    this.Meses.forEach((item) => {
      total += (this.state.monto * this.state.tna / 100) / 12;
      results.push({mes: item, total: total});
    }, this);
    this.setState({results: results});
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
        <Lista result={this.state.results}/>
      </div>
    );
  }
}
