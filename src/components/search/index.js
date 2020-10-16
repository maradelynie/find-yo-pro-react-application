import React from 'react';

import {SearchCard,SearchInput,SearchBtn} from './styles';

export default function Search({setResultsData}) {
  const mock = [
    {
        "login": "yuriymarad",
        "id": 11276820,
        "node_id": "MDQ6VXNlcjExMjc2ODIw",
        "avatar_url": "https://avatars0.githubusercontent.com/u/11276820?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/yuriymarad",
        "html_url": "https://github.com/yuriymarad",
        "followers_url": "https://api.github.com/users/yuriymarad/followers",
        "following_url": "https://api.github.com/users/yuriymarad/following{/other_user}",
        "gists_url": "https://api.github.com/users/yuriymarad/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/yuriymarad/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/yuriymarad/subscriptions",
        "organizations_url": "https://api.github.com/users/yuriymarad/orgs",
        "repos_url": "https://api.github.com/users/yuriymarad/repos",
        "events_url": "https://api.github.com/users/yuriymarad/events{/privacy}",
        "received_events_url": "https://api.github.com/users/yuriymarad/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    },
    {
        "login": "MargaritAder",
        "id": 58591764,
        "node_id": "MDQ6VXNlcjU4NTkxNzY0",
        "avatar_url": "https://avatars3.githubusercontent.com/u/58591764?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/MargaritAder",
        "html_url": "https://github.com/MargaritAder",
        "followers_url": "https://api.github.com/users/MargaritAder/followers",
        "following_url": "https://api.github.com/users/MargaritAder/following{/other_user}",
        "gists_url": "https://api.github.com/users/MargaritAder/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/MargaritAder/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/MargaritAder/subscriptions",
        "organizations_url": "https://api.github.com/users/MargaritAder/orgs",
        "repos_url": "https://api.github.com/users/MargaritAder/repos",
        "events_url": "https://api.github.com/users/MargaritAder/events{/privacy}",
        "received_events_url": "https://api.github.com/users/MargaritAder/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    },
    {
        "login": "yramarad31",
        "id": 3755553,
        "node_id": "MDQ6VXNlcjM3NTU1NTM=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/3755553?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/yramarad31",
        "html_url": "https://github.com/yramarad31",
        "followers_url": "https://api.github.com/users/yramarad31/followers",
        "following_url": "https://api.github.com/users/yramarad31/following{/other_user}",
        "gists_url": "https://api.github.com/users/yramarad31/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/yramarad31/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/yramarad31/subscriptions",
        "organizations_url": "https://api.github.com/users/yramarad31/orgs",
        "repos_url": "https://api.github.com/users/yramarad31/repos",
        "events_url": "https://api.github.com/users/yramarad31/events{/privacy}",
        "received_events_url": "https://api.github.com/users/yramarad31/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
    }
]
  return (
    <SearchCard>
        <p>
          Find yo pro é uma ferramenta de busca para você, recruiter, que quer visualizar de forma mais clara e rápida os repositórios dos candidatos para a sua vaga, experimente!
        </p>
        <div>
          <SearchInput type="search" placeholder="Nome do candidato"/>
          <SearchBtn onClick={() => setResultsData(mock)}>Buscar</SearchBtn>
        </div>
      </SearchCard>
  );
}


