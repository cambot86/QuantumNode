// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuantumNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuantumNode/i);
    expect(titleElement).toBeInTheDocument();
});
