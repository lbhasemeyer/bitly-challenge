import OneAnimal from '../../components/OneAnimal';
import React, {useState, useEffect} from 'react';

interface animalProps {
  name: string,
  id: number
}

function Home(props:any) {
  const animalData = 
    props.animals.map((animal: animalProps) => {
      return <OneAnimal key={animal?.id} name={animal?.name} id={animal?.id} />
    });

  return (
    <div>
      <>
        <h1>All animals</h1>
        {props.animalsError !== '' ? props.animalsError : null}
        <ul>
          {animalData}
        </ul>
      </>
    </div>
  );
}

export default Home;
