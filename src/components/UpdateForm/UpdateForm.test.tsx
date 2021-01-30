
import React from 'react';
import { render, screen } from '@testing-library/react';
import UpdateForm from './UpdateForm';

test('renders', () => {
    render(<UpdateForm />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
})