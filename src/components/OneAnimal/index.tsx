import React from 'react';
import { Link } from 'react-router-dom';

interface oneAnimalProps {
    name: string,
    id: number,
    active_time: string
}

const OneAnimal = ({ name, id, active_time }: oneAnimalProps) => {
    const animalUrl = `/animals/${id}`;
    return (
        <li>
            <Link to={animalUrl} state={{ name, id }}>
                <span>
                    {name}
                </span>
            </Link>
        </li>
    );
}

export default OneAnimal;
