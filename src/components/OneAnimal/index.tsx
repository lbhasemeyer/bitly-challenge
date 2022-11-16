import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface oneAnimalProps {
    active_time: string,
    id: number,
    name: string
}

const OneAnimal = ({ active_time, id, name }: oneAnimalProps) => {
    const animalUrl = `/animals/${id}`;
    const activeTime = active_time === 'Nocturnal' ? 'night' : 'day';
    const mainClassName = `OneAnimal ${activeTime}`;

    return (
        <div className={mainClassName} data-testid="oneAnimalName">
            <Link to={animalUrl} state={{ name, id }}>
                {name}
            </Link>
        </div>
    );
}

export default OneAnimal;
