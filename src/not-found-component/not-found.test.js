import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./not-found";

describe("Not Found Component Tests", () => {
  test("should render NotFound component properly", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    // Assert the presence of navigation links
    const sorryHeading = screen.getByText("Sorry", { selector: "h2" });
    const notFoundParagraph = screen.getByText("This page can't be found!", {
      selector: "p",
    });

    expect(sorryHeading).toBeInTheDocument();
    expect(notFoundParagraph).toBeInTheDocument();
  });

  test('should redirect to Home page when clicking "Home" link', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const homeURL = "/";
    const homeLink = screen.getByRole("home");
    fireEvent.click(homeLink);

    // Assert that the browser's current URL matches the homeURL
    expect(window.location.pathname).toBe(homeURL);
  });
});
