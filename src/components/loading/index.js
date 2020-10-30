import React from 'react';

import {useSelector} from "react-redux";

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Spinner} from './styles';

export default function Loading() {

  const {loading} = useSelector(state => state);
  
  if(loading){
    return (
      <Spinner>
            <FontAwesomeIcon className="icon__loading" icon={faCircleNotch}/> 
      </Spinner>
    );
  }else{
    return <></>
  }
  
  
}


