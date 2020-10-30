import React,{useState} from 'react';

import {getDetailsResults} from '../../services';

import {Repo,Lang} from './styles';

export default function RepoDetails({data, link}) {
    const [allLanguages, setAllLanguages] = useState({})
    const [languages, setLanguages] = useState([])
    const [total, setTotal] = useState(0)

    const getLenguages = async (e) => {
        e.preventDefault();
        const btn = e.target
       
        const getLanguages = await getDetailsResults(data.languages_url);
        setAllLanguages(getLanguages)
        setLanguages(Object.keys(getLanguages));
        setTotal(Object.values(getLanguages).reduce((acc, item)=>acc+item));
        btn.remove();
        
    }
        
  

    const porcent = (total, part) => {
        return Math.round((part*100)/total)+"%"
    }
    
  return (
    <Repo >
        
        <p>{data.name}<span> ({data.language})</span></p>
    
        
        <button onClick={getLenguages}>Mais detalhes sobre as linguagens</button>
        
        
        <div className="repository_languaes">
            
        {languages? languages.map((language)=>{
            
            return (
                <Lang key={language} size={porcent(total,allLanguages[language])}>
                    <p>{language}</p>
                    <div  className="languages_Item" ></div>
                </Lang>
            )
        }):<></>}
        </div>

        <p>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer" > Ver repositório </a>
            {data.homepage?<>|<a href={data.homepage} target="_blank" rel="noopener noreferrer"> Ver Página</a></>:<></>}
        </p>
    </Repo>
  );
}


