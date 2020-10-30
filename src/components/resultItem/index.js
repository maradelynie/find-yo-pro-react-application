import React,{useState} from 'react';

import {setLoading,setError} from "../../redux/actions";
import {useDispatch} from "react-redux";

import RepoDetails from '../repoDetails';

import {Item} from './styles';
import {getDetailsResults} from '../../services';
import { faChevronDown,faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResultItem({data}) {
  const dispatch = useDispatch();
  
    const [details, setDetails] = useState(false);
    const [userData, setUserData] = useState(false);
    const [repoData, setRepoData] = useState([]);

    const getData = async () => {
      dispatch(setLoading(true))
      try{
        const repos = await getDetailsResults(data.repos_url);
        setRepoData(repos.sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at)))
        const user = await getDetailsResults(data.url);

        setUserData(user)
        setDetails(!details);

        dispatch(setLoading(false))
      }catch{
        dispatch(setLoading(false))
        dispatch(setError(true))
      }
        
    }

    const showDetails = () => {
       
        if(repoData.length<1&&!details)getData()
        else setDetails(!details)
    }

    const showUserDetails = () => {
      if(userData){
        return (<>
        <div className="resultItem_userDetail" >
        
          <img alt={`avatar ${userData.name}`}src={userData.avatar_url}></img>
          <div className="resultItem_text">
            <p>{userData.name}</p>
            <span>{userData.bio}</span>
            <small>{userData.location}</small>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer" >{data.html_url}</a>
            <a href={userData.blog} target="_blank" rel="noopener noreferrer" >{userData.blog}</a>
          </div>
          </div>
          {details?<h4>Projetos:</h4>:<></>}
          </>
        )
      }
      
  }

  return (
    <Item >
      <section onClick={()=>showDetails()}>

        <h3>
          {data.login}
        </h3>

      <FontAwesomeIcon 
        className="detailsIcon" 
        icon={details?faChevronUp:faChevronDown}
      /> 

      </section>
      
      {showUserDetails()}
            
      {details?repoData.map(repo=>{
            return <RepoDetails key={repo.id}  data={repo}/>}):<></>}

    </Item>
  );
}


