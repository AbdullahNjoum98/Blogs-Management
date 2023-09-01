import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "./blog-details";
import { baseUrl, blogsUrl } from "../helpers/constants";

jest.mock("../hooks/api-hooks/useFetch");

describe("Blog Details Component Tests", () => {
  beforeEach(() => {
    require("../hooks/api-hooks/useFetch").default.mockReturnValue({
      data: {
        id: 1,
        title: "Test Blog Title",
        author: "Test Author",
        body: "Test Blog Body",
      },
      loading: false,
      error: null,
    });
  });

  test("should render blog details", () => {
    render(
      <MemoryRouter initialEntries={["/blogs/1"]}>
        <Routes>
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Verify that loading message is not displayed
    expect(screen.queryByText("Loading ...")).toBeNull();

    // Verify that the blog details are rendered
    expect(screen.getByText("Test Blog Title")).toBeInTheDocument();
    expect(screen.getByText("Written by Test Author")).toBeInTheDocument();
    expect(screen.getByText("Test Blog Body")).toBeInTheDocument();
  });

  test("should handle delete button click", () => {
    const mockNavigate = jest.fn();
    const mockFetch = jest.fn(() => Promise.resolve());

    jest.spyOn(global, "fetch").mockImplementation(mockFetch);
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter initialEntries={["/blogs/1"]}>
        <Routes>
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Click the delete button
    fireEvent.click(screen.getByText("Delete"));

    // Verify that fetch is called with the correct URL and method
    expect(mockFetch).toHaveBeenCalledWith(`${baseUrl}${blogsUrl}/1`, {
      method: "DELETE",
    });
  });
});
