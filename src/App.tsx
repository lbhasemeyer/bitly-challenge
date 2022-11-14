import React, {useState, useEffect} from 'react';
// import React from 'react';
import AnimalDetails from './components/AnimalDetails';
import Home from './components/Home';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App(){
  const [allAnimals, setAllAnimals] = useState<any[]>([]);
  const [getAnimalsError, setGetAnimalsError] = useState('');

  useEffect(() => {
    console.log('useEffect');
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
    .catch(error => setGetAnimalsError('Something went wrong herding the animals - please refresh page to try again.'));
  }, [])

  console.log('allAnimals: ', allAnimals);
  console.log('getAnimalsError: ', getAnimalsError);
  
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route path='/animals' element={<Home animals={allAnimals} animalsError={getAnimalsError} />} />
        {/* <Route path='/animals/:id' element={<AnimalDetails} /> */}
        {/* <Route path='*' element={<Error404 />} */}
      </Routes>
    </React.Fragment>
  )
}

export default App;
