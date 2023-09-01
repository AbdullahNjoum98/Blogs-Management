import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";

describe("Navbar Component Tests", () => {
  test("should render Navbar component properly", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Assert the presence of navigation links
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Create a New Blog")).toBeInTheDocument();
  });

  test('should redirect to Home page when clicking "Home" link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const homeURl = "/";
    const homeLink = screen.queryByRole("home");
    fireEvent.click(homeLink);

    // Assert that the browser's current URL matches the homeURL
    expect(window.location.pathname).toBe(homeURl);
  });

  test('should redirect to Create page when clicking "Create a New Blog" link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const createURL = "/create";
    const createLink = screen.getByRole("create");
    fireEvent.click(createLink);

    // Assert that the browser's current URL matches the createURL
    expect(window.location.pathname).toBe(createURL);
  });
});
