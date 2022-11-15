import React from 'react';
import Home from '.';
import { MemoryRouter } from 'react-router-dom';
import OneAnimal from '../../components/OneAnimal';
import { render, screen } from '@testing-library/react';

const sampleAnimals = [ { id: 1, name: 'Sarcastic Fringehead' }, { id: 20, name: 'Fried Egg Jellyfish' } ];
const sampleAnimalsError = 'Something went wrong while herding the animals - please refresh page to try again.';

test('renders animals list when animals are passed in props', () => {
  render(<Home animals={sampleAnimals} animalsError={''} />, {wrapper: MemoryRouter});
  const animalsList = screen.getByTestId('animalsList');
  expect(animalsList).toBeInTheDocument();
});

test('renders error when API call error is passed in props', () => {
  render(<Home animals={[]} animalsError={sampleAnimalsError} />);
  const errorMessage = screen.getByTestId('animalsError');
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveTextContent('Something went wrong while herding the animals - please refresh page to try again.')
});