import React,{useState, useEffect} from 'react';

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setError} from "../../redux/actions";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Alert} from './styles';

export default function Error() {
  const dispatch = useDispatch();

  const [count, setCount] = useState(60)
  const {error} = useSelector(state => state);

  useEffect(() => {
    if(error){
      const countInterval = setInterval(() => {
        setCount(count=>{
          if(count<1){
            clearInterval(countInterval)
            dispatch(setError(false))
          }
          return count-1
        })
       

      }, 1000);
      return () => {
        clearInterval(countInterval)
        setCount(60)
      }
    }
    
  }, [error])
  

  if(error){
    return (
      <Alert>
        <div>
          <FontAwesomeIcon className="icon__alert" icon={faExclamationTriangle}/> 
          <p>Você atingiu seu limite de pesquisas, aguarde {count} segundos para continuar <strike>ou faça sau conta preimum</strike>.(em breve)</p>
        </div>
      </Alert>
    );
  }else{
    return <></>
  }
  
  
}


