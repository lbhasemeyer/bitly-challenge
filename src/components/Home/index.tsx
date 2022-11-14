import OneAnimal from '../OneAnimal';
import React, {useState, useEffect} from 'react';

interface animalProps {
  name: string,
  active_time: string,
  habitat: string,
  id: number
}

function Home() {
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
    .catch(error => setGetAnimalsError('Something went wrong herding the animals - please refresh page to try again.'));
  }, [])

console.log('all animals', allAnimals)

  const animalData = 
    allAnimals.map((animal: animalProps) => {
      return <OneAnimal name={animal?.name} active_time={animal?.active_time} habitat={animal?.habitat} id={animal?.id} />
    });

  console.log('animalData: ', animalData)

  return (
    <div>
      <>
        <h1>All animals</h1>
        {getAnimalsError !== '' ? getAnimalsError : null}
        {animalData}
      </>
    </div>
  );
}

export default Home;
