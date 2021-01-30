import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Allergy Diary/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders update form', () => {
  render(<App />);
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();
});