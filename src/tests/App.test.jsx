import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders the profile sidebar and the About page by default", async () => {
    window.location.hash = "";
    render(<App />);

    expect(screen.getByText("Seamor Estrabon")).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", { level: 1, name: "About Me" })
    ).toBeInTheDocument();
  });

  it("shows the About page for unknown addresses such as the removed #/contact", async () => {
    window.location.hash = "#/contact";
    render(<App />);

    expect(
      await screen.findByRole("heading", { level: 1, name: "About Me" })
    ).toBeInTheDocument();
    window.location.hash = "";
  });
});
