import React from 'react';
import AnimalDetails from './components/AnimalDetails';
import Home from './components/Home';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App(){
  
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='/animals' element={<Home />} />
        {/* <Route path='/animals/:id' element={<AnimalDetails} /> */}
        {/* <Route path='*' element={<Error404 />} */}
      </Routes>
    </React.Fragment>
  )
}

export default App;
