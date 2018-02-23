import React from 'react';
import Controles from './controles';

export default class Calculadora extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monto: null,
      tna: null
    }
  }

  render(){
    return(
      <div>
        <h1>Calcular ganancias</h1>
        <Controles state={this.state}/>
      </div>
    )
  }
}
