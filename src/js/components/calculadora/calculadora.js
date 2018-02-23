import React from 'react';
import Controles from './controles';

export default class Calculadora extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monto: '',
      tna: ''
    };
    this.updateValues = this.updateValues.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  /*shouldComponentUpdate(nextProps, nextState){
    return this.state.monto !== nextState.monto | this.state.tna !== nextState.tna;
  }*/
  updateValues(e){
    let state = this.state;
    state[e.target.name] = parseInt(e.target.value);
    this.setState(state);
  }
  handleForm(e){
    e.preventDefault();
    alert('Perfecto!!! Detuviste el evento y tienes el control del formulario :)');
  }
  render(){
    return(
      <div>
        <h1>Calcular ganancias</h1>
        <Controles
          change={this.updateValues}
          state={this.state}
          calcular={this.handleForm}/>
      </div>
    );
  }
}
