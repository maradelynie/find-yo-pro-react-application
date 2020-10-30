import React from 'react';

import {useSelector} from "react-redux";

import ResultItem from '../resultItem';

export default function ResultsList() {

  const {list,lastSearch} = useSelector(state => state);

  if(list.length>0){
    return (<>
      {list.map(item=>
        {return <ResultItem key={item.id} data={item}/>})}
      
      </>);
  }
  return (
    lastSearch!==""&&list.length===0?<p>Sem resultados</p>:<></>
  );
}


