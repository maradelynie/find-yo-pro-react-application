import React, {useState} from 'react';

import {setList,setLastSearch,setLoading,setError} from "../../redux/actions";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";

import {SearchCard,SearchInput,SearchBtn} from './styles';
import {getSearchResults} from '../../services';

export default function Search() {
  const dispatch = useDispatch();
  const {lastSearch} = useSelector(state => state);

  const [searchInput, setSearchInput] = useState(lastSearch)

  const search = async (e) => {
    e.preventDefault()
    try{
      if(searchInput!==""){
        dispatch(setLoading(true))
  
        const searchResults = await getSearchResults(searchInput)
        dispatch(setList(searchResults.data.items))
        dispatch(setLastSearch(searchInput))
  
        if(searchResults.data.items.length>1){
          dispatch(setLastSearch(searchResults.headers.link?.slice(1).split(">",1)))
        }
        dispatch(setLoading(false))
        
      }
    }catch(error){
      dispatch(setLoading(false))
      dispatch(setError(true))
    }
    
    
  }

  return (
    <SearchCard>
        <p>
          Find yo pro é uma ferramenta de busca para você, recruiter, que quer visualizar de forma mais clara e rápida os repositórios dos candidatos para a sua vaga, experimente!
        </p>
        <form onSubmit={(e) => search(e)}>
          <SearchInput type="search" vlaue={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Nome ou email do candidato"/>
          <SearchBtn type="submit" >Buscar</SearchBtn>
        </form>
      </SearchCard>
  );
}


