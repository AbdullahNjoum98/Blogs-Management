import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogsList from "./blog-list";

jest.mock('../blog-component/blog', () => {
    // eslint-disable-next-line jest/no-mocks-import
    return require('../__mocks__/blog').default;
 });
describe("Blog List Component Tests", () => {

  const title = "list testing title";
  const blogs = [
    {
      id: 1,
      title: "testing title",
      author: "testing author",
      body: "testing body",
    },
    {
      id: 2,
      title: "testing title 2",
      author: "testing author 2",
      body: "testing body 2",
    },
  ];

  test("should render blog list with passed data", () => {
    render(
      <MemoryRouter>
        <BlogsList blogs={blogs} title={title}></BlogsList>
      </MemoryRouter>
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const blogElements = screen.getAllByTestId("mocked-blog");
    expect(blogElements).toHaveLength(blogs.length);
  });
});
