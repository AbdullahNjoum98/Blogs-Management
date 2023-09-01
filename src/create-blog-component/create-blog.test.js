import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Create from './create-blog';
import { baseUrl, blogsUrl } from '../helpers/constants';

// Mock the fetch function
global.fetch = jest.fn();

describe('Create Blog Component Tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render the form and submit successfully', async () => {
    render(
      <MemoryRouter>
        <Create />
      </MemoryRouter>
    );

    // Mock the fetch POST request
    const mockResponse = { ok: true };
    global.fetch.mockResolvedValue({
      json: async () => mockResponse,
    });

    // Fill out the form
    const titleInput = screen.getByLabelText('Blog title:');
    const authorSelect = screen.getByLabelText('Blog author:');
    const bodyTextarea = screen.getByLabelText('Blog body:');

    fireEvent.change(titleInput, { target: { value: 'Test Blog' } });
    fireEvent.change(authorSelect, { target: { value: 'Kane' } });
    fireEvent.change(bodyTextarea, {
      target: { value: 'This is a test blog.' },
    });

    const addBlogButton = screen.getByText('Add Blog');
    fireEvent.click(addBlogButton);

    // Wait for the form submission to complete
    await waitFor(async () => {
      await screen.findByText('Adding Blog..');
    });

    expect(global.fetch).toHaveBeenCalledWith(`${baseUrl}${blogsUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test Blog',
        author: 'Kane',
        body: 'This is a test blog.',
      }),
    });
  });
});
