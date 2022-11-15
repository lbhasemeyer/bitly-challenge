import OneAnimal from '../../components/OneAnimal';
import React, {useState, useEffect} from 'react';

interface animalProps {
  id: number,
  name: string
}

function Home(props:any) {
  const animalDataList = (props.animals.length > 0) ?
    (<ul data-testid="animalsList">
      {props.animals.map((animal: animalProps) => {
        return <OneAnimal data-testid="oneAnimal" key={animal.id} name={animal.name} id={animal.id} />
      })}
    </ul>) : null;

  const animalsErrorDisplay = (props.animalsError !== '') ? (
    <span data-testid="animalsError">
      {props.animalsError !== '' ? props.animalsError : null}
    </span>
  ): null;

  return (
    <div>
      <h1>All animals</h1>
      {animalsErrorDisplay}
      {animalDataList}
    </div>
  );
}

export default Home;
