// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './home';

// Mocking the useFetch hook
jest.mock('../hooks/api-hooks/useFetch');

// Mocking the BlogList component
jest.mock('../blog-list-component/blog-list', () => {
    // eslint-disable-next-line jest/no-mocks-import
    return require('../__mocks__/blogs-list').default;
 });

test('should render loading state when useFetch returns loading', () => {
  // Set the mock loading state
  require('../hooks/api-hooks/useFetch').default.mockReturnValue({
    data: null,
    loading: true,
    error: null,
  });

  render(<Home />);
  const loadingElement = screen.getByText(/Loading .../i);
  expect(loadingElement).toBeInTheDocument();
});

test('should render error state when useFetch throws error', () => {
  require('../hooks/api-hooks/useFetch').default.mockReturnValue({
    data: null,
    loading: false,
    error: 'Error Message',
  });

  render(<Home />);
  const errorElement = screen.getByText(/Error Message/i);
  expect(errorElement).toBeInTheDocument();
});

test('should render blogs when being returned from useFetch', () => {
  // Set the mock blogs data
  const mockBlogs = [
    { id:1, title: 'Testing Blog', author:'Testing Author', body: 'Testing body' }
  ];
  require('../hooks/api-hooks/useFetch').default.mockReturnValue({
    data: mockBlogs,
    loading: false,
    error: null,
  });

  render(<Home />);

  const blogTitle = screen.getByText(/Testing Blog/i);
  expect(blogTitle).toBeInTheDocument();
});
