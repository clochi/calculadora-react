import React from 'react';

const Lista = (props) => {
  if(props.result){
    return(
        props.result.map((item) => <li key={item.es}>{item.mes}: ${item.total}</li>)
    );
  }else{
    return <ul/>;
  }
};

export default Lista;
