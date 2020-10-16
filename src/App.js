import React,{useState} from 'react';

import Header from './components/header';
import Search from './components/search';
import ResultsList from './components/resultsList';

function App() {
  const [retulsdata, setResultsData] = useState([])
  return (
    <div className="body_conainer">
      <Header/>
      <Search setResultsData={setResultsData} />
      <ResultsList retulsdata={retulsdata}/>
    </div>
  );
}

export default App;
