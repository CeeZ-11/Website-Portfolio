// tests/MainLayout.test.js
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

describe("MainLayout", () => {
  it("renders the profile card and details", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    // Profile card
    expect(screen.getByAltText(/profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Seamor Estrabon/)).toBeInTheDocument();
    expect(screen.getByText(/Front-End Developer/)).toBeInTheDocument();

    // Profile details
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/seamorestrabon@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByText(/\+639270664116/i)).toBeInTheDocument();
    expect(screen.getByText(/Birthdate/i)).toBeInTheDocument();
    expect(screen.getByText(/December 11, 1996/i)).toBeInTheDocument();
    expect(screen.getByText(/Address/i)).toBeInTheDocument();
    expect(screen.getByText(/Bacolod City, Philippines/i)).toBeInTheDocument();
  });

  it("renders and verifies navigation links", () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>
    );

    // Navigation links
    const links = ["About", "Resume", "Portfolio", "Contact"];
    links.forEach((link) => {
      expect(screen.getByText(new RegExp(link, "i"))).toBeInTheDocument();
    });
  });

  it("navigates to different sections when clicking links", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainLayout />
      </MemoryRouter>
    );

    const navLinks = [
      { name: /About/i, expectedText: /About Me/i },
      { name: /Resume/i, expectedText: /Resume/i },
      { name: /Portfolio/i, expectedText: /Portfolio/i },
      { name: /Contact/i, expectedText: /Contact/i },
    ];

    for (const { name, expectedText } of navLinks) {
      fireEvent.click(screen.getByText(name));

      await waitFor(() => {
        expect(screen.getByText(expectedText)).toBeInTheDocument();
      });
    }
  });
});
