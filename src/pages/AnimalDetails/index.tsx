import React from 'react';
import { useParams } from "react-router-dom";
import './index.css';

interface animalProps {
    active_time: string,
    habitat: string,
    id: number,
    name: string
}

const AnimalDetails = (props:any) => {
    const idParam = useParams().id;
    const chosenAnimal = props.animals.find((animal: animalProps) => {
        return(String(animal.id) === idParam);
    })
    const activeTime = chosenAnimal.active_time;
    const mode = activeTime === 'Nocturnal' ? 'night' : 'day';
    const mainClassName = `AnimalDetails ${mode}`;

    return (
        <div className={mainClassName}>
            <h1>{chosenAnimal.name}</h1>
            The {chosenAnimal.name} is {activeTime.toLowerCase()} (awake during the {mode}), and lives in the {chosenAnimal.habitat.toLowerCase()}.
        </div>
    );
}

export default AnimalDetails;
