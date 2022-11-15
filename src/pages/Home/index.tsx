import React from 'react';
import OneAnimal from '../../components/OneAnimal';
import './index.css';

interface animalProps {
  id: number,
  name: string
}

function Home(props:any) {
  const animalDataList = (props.animals.length > 0) ?
    (<ul className="animalsList" data-testid="animalsList">
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
    <div className="Home">
      <h1>All animals</h1>
      {animalsErrorDisplay}
      {animalDataList}
    </div>
  );
}

export default Home;
