import React from 'react';
import Home from '.';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const sampleAnimals = [ { id: 1, name: 'Sarcastic Fringehead' }, { id: 20, name: 'Fried Egg Jellyfish' } ];
const sampleAnimalsError = 'Something went wrong while herding the animals - please refresh page to try again.';

test('renders the animals list with 2 animals when 2 animals are passed in props', async () => {
  render(<Home animals={sampleAnimals} animalsError={''} />, {wrapper: MemoryRouter});
  const animalsList = screen.getByTestId('animalsList');
  expect(animalsList).toBeInTheDocument();
  const animalNames = await screen.findAllByTestId('oneAnimalName');
  expect(animalNames).toHaveLength(2);
});

test('renders error when API call error is passed in props', () => {
  render(<Home animals={[]} animalsError={sampleAnimalsError} />);
  const errorMessage = screen.getByTestId('animalsError');
  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveTextContent('Something went wrong while herding the animals - please refresh page to try again.')
});