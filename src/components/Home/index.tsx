import OneAnimal from '../OneAnimal';
import React, {useState, useEffect} from 'react';

interface animalProps {
  name: string,
  active_time: string,
  habitat: string,
  id: number
}

function Home(props:any) {
console.log('props: ', props) 

  const animalData = 
    props.animals.map((animal: animalProps) => {
      return <OneAnimal key={animal?.id} name={animal?.name} active_time={animal?.active_time} habitat={animal?.habitat} id={animal?.id} />
    });

  return (
    <div>
      <>
        <h1>All animals</h1>
        {props.animalsError !== '' ? props.animalsError : null}
        {animalData}
      </>
    </div>
  );
}

export default Home;
