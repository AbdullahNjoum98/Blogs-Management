import { render, screen } from "@testing-library/react";
import Blog from "./blog";
import { MemoryRouter } from "react-router-dom";

describe('Blog Component Tests', () => {
    const blog = {
        id: 1,
        title: 'testing title',
        author: 'testing author',
        body: 'testing body'
    };
    test('should render blog with passed data', () => {
        render(
            <MemoryRouter>
                <Blog blog={blog}></Blog>
            </MemoryRouter>
        );
        
        const titleElement = screen.getByText(blog.title.toString());
        expect(titleElement).toBeInTheDocument();

        const authorElement = screen.getByText(`written by ${blog.author.toString()}`);
        expect(authorElement).toBeInTheDocument();
    })
});