import React from 'react';
import { Link } from 'react-router-dom';

interface animalDetailsProps {
    name: string,
    active_time: string,
    habitat: string,
    id: number
}

const AnimalDetails = ({ name, active_time, habitat, id }: animalDetailsProps) => {
    console.log('???', )
    const animalUrl = `/animal/${id}`
    return (
        <div>
            Name: {name}
            Active time: {active_time}
            Habitat: {habitat}
        </div>
    );
}

export default AnimalDetails;
