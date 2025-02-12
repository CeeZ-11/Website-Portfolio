import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import TechStack from "../components/TechStack";
import { it, expect, describe } from "vitest";
import JavaScriptIcon from "../components/Icons/JavscriptIcon";

describe("About Page", () => {
  it("renders 'About Me' heading and 'description'", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "About Me"
    );
  });

  it("renders 'My Journey' section", () => {
    render(<About />);
    expect(screen.getByText(/My Journey/i)).toBeInTheDocument();
    expect(
      screen.getByText(/I started as an IT professor teaching /i)
    ).toBeInTheDocument();
  });

  it("renders the Tech Stack section", () => {
    render(<About />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders a list of technologies in the Tech Stack", () => {
    render(<About />);
    const techStack = ["JavaScript", "React", "HTML5", "CSS3"];
    techStack.forEach((tech) => {
      const matches = screen.getAllByText(new RegExp(tech, "i"));
      expect(matches.length).toBeGreaterThan(0);
    });
  });

  const learningItems = [
    "Advanced React (State Management, Context API)",
    "Full-stack Development with Node.js & Express",
    "Mobile App Development (Future Goal)",
  ];

  it("renders the Current Learning section and list", () => {
    render(<About />);
    expect(screen.getByText(/Currently Learning/i)).toBeInTheDocument();
    learningItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});

describe("TechStack Component", () => {
  it("renders the icon and name", () => {
    render(<TechStack icon={JavaScriptIcon} name="JavaScript (ES6+)" />);

    expect(screen.getByText("JavaScript (ES6+)")).toBeInTheDocument();

    const icon = screen.getByTestId("javascript-icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("alt", "JavaScript Icon");
  });
});
