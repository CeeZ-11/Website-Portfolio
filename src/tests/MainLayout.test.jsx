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

    expect(screen.getByAltText(/profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Seamor Estrabon/)).toBeInTheDocument();
    expect(screen.getByText(/Web Developer & Digital Marketing Analyst/)).toBeInTheDocument();

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

    const links = ["About", "Resume", "Portfolio"];
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

    // Click the menu links by their exact names (page text can also mention "Portfolio"),
    // then check each page's main heading.
    const navLinks = [
      { name: /^About$/, heading: /About Me/ },
      { name: /^Resume$/, heading: /Resume/ },
      { name: /^Portfolio$/, heading: /Portfolio/ },
    ];

    for (const { name, heading } of navLinks) {
      fireEvent.click(screen.getByRole("link", { name }));

      await waitFor(() => {
        expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
      });
    }
  });
});
