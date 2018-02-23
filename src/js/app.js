import React from 'react';
import { render } from 'react-dom';
import Calculadora from './components/calculadora/calculadora';

const App = () => (
  <div>
    <Calculadora />
  </div>
)

render(<App />, document.getElementById('app'));
