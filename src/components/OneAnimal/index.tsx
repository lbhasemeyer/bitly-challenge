import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface oneAnimalProps {
    name: string,
    id: number
}

const OneAnimal = ({ name, id }: oneAnimalProps) => {
    const animalUrl = `/animals/${id}`;

    return (
        <li className="OneAnimal">
            <Link to={animalUrl} state={{ name, id }}>
                <span data-testid="oneAnimalName">
                    {name}
                </span>
            </Link>
        </li>
    );
}

export default OneAnimal;
