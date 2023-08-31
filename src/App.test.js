import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/Blog Management System/i);
  const createButton = screen.getByText(/Create a New Blog/i);
  
  expect(titleElement).toBeInTheDocument();
  expect(createButton).toBeInTheDocument();
});
