import React from 'react';
import Home from '.';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
