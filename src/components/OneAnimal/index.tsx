import React from 'react';
import { Link } from 'react-router-dom';

interface oneAnimalProps {
    name: string,
    active_time: string,
    habitat: string,
    id: number
}

const OneAnimal = ({ name, active_time, habitat, id }: oneAnimalProps) => {
    const animalUrl = `/animal/${id}`;
    return (
        <div>
            <Link to={animalUrl} state={{ name, active_time, habitat, id }}>
                Name: {name}
            </Link>
            Active time: {active_time}
            Habitat: {habitat}
        </div>
    );
}

export default OneAnimal;
