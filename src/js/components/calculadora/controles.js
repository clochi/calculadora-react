import React from 'react';

const Controles = props => (
  <form>
    <input type="text" value={props.state.monto} name="monto" onChange={props.change} placeholder="Monto"/><br/>
    <input type="text" value={props.state.tna} name="tna" onChange={props.change} placeholder="TNA"/><br/>
    <button onClick={props.calcular}>Calcular</button>
  </form>
);

export default Controles;
