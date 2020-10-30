import React from 'react';

import Header from './components/header';
import Search from './components/search';
import ResultsList from './components/resultsList';
import Loading from './components/loading';
import Error from './components/error';

function App() {
  return (
    <div className="body_conainer">
      <Loading/>
      <Error/>
      <Header/>
      <Search />
      <ResultsList/>
    </div>
  );
}

export default App;
