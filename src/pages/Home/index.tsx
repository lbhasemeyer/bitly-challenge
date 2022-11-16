import React from 'react';
import OneAnimal from '../../components/OneAnimal';
import './index.css';

interface animalProps {
  active_time: string,
  id: number,
  name: string
}

function Home(props:any) {
  const animalDataList = (props.animals.length > 0) ?
    (<div className="animalsList" data-testid="animalsList">
      {props.animals.map((animal: animalProps) => {
        return <OneAnimal data-testid="oneAnimal" key={animal.id} active_time={animal.active_time} id={animal.id} name={animal.name} />
      })}
    </div>) : null;

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
