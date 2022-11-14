import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

interface animalDetailsProps {
    name: string,
    id: number
}

const AnimalDetails = ({ name, id }: animalDetailsProps) => {
    console.log('???', )
    const animalUrl = `/animal/${id}`
    return (
        <div>
            Name: {name}
        </div>
    );
}

export default AnimalDetails;
