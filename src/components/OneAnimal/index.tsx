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
        <Link className={mainClassName} to={animalUrl} state={{ name, id }}>
            <div className={'OneAnimal-name'} data-testid="oneAnimalName">
                {name}
            </div>
        </Link>
    );
}

export default OneAnimal;
