import React from 'react';

const Lista = (props) => {
  if(props.result){
    return(
      <ul>
        {props.result.map((item) => <li key={item.mes}>{item.mes}: ${item.total.toFixed(2)}</li>)}
      </ul>
    );
  }else{
    return false;
  }
};

export default Lista;
