import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='container-fluid'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='container'>
      <Search searchValue={searchValue} />
      </div>
    </div>
  );
};

export default App;