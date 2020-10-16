import React from 'react';

import ResultItem from '../resultItem';

export default function ResultsList({retulsdata}) {
  if(retulsdata.length>0){
    return (
      retulsdata.map(item=>
        {return <ResultItem key={item.id} data={item}/>})
      
      );
  }
  return (
   <></>
  );
}


