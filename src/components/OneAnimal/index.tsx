import React from 'react';
import { Link } from 'react-router-dom';

interface oneAnimalProps {
    name: string,
    id: number
}

const OneAnimal = ({ name, id }: oneAnimalProps) => {
    const animalUrl = `/animals/${id}`;
    
    return (
        <li>
            <Link to={animalUrl} state={{ name, id }}>
                {name}
            </Link>
        </li>
    );
}

export default OneAnimal;
