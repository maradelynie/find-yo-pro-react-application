import React from 'react';

import {Repo,Lang} from './styles';


export default function RepoDetails({data, link}) {
  
    const lang = {
        "JavaScript": 22321,
        "SCSS": 6807,
        "HTML": 745,
        "CSS": 179
    }

    const languaes = Object.keys(lang)
    const total = Object.values(lang).reduce((acc, item)=>acc+item)

    const porcent = (total, part) => {
        return Math.round((part*100)/total)+"%"
    }

  return (
    <Repo >
        
        <p>
        {data.name}
        </p>
        <span>
            <a href={link}>Ver gitHub </a>|
            <a href={data.html_url}> Ver repositório </a>
            {data.homepage?<>|<a href={data.homepage}> Ver Página</a></>:<></>}
        </span>
        <div className="repository_languaes">
            {languaes.map((language)=>{
                return (
                    <Lang key={language} size={porcent(total,lang[language])}>
                        <p>{language}</p>
                        <div  className="languages_Item" ></div>
                    </Lang>
                )
            })}
        </div>
    </Repo>
  );
}


