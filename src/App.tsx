import React, {useState, useEffect} from 'react';
import AnimalDetails from './components/AnimalDetails';
import Home from './components/Home';
import Nav from './components/Nav';
import { Navigate, Routes, Route } from 'react-router-dom';

function App(){
  const [allAnimals, setAllAnimals] = useState<any[]>([]);
  const [getAnimalsError, setGetAnimalsError] = useState('');

  useEffect(() => {
    const animalsUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
    fetch(animalsUrl, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
    .then(response => response.json())
    .then(data => {
      setAllAnimals(data);
    })
    .catch(error => setGetAnimalsError('Something went wrong while herding the animals - please refresh page to try again.'));
  }, [])
  
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='/animals' element={<Home animals={allAnimals} animalsError={getAnimalsError} />} />
        {/* <Route path='/animals/:id' element={<AnimalDetails />} /> */}
        {/* Redirects */}
        <Route path="/" element={ <Navigate to="/animals" /> } />
      </Routes>
    </React.Fragment>
  )
}

export default App;
