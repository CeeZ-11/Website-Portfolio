import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Resume from "../pages/Resume";
import NavButton from "../components/NavButton";

describe("Resume Page", () => {
  it("renders the Contact page correctly", () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'Experience' section", () => {
    render(<Resume />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Web Consultant (Freelance)")).toBeInTheDocument();
    expect(screen.getByText("OCT 2024 - PRESENT")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Managed and maintained WordPress websites on GoDaddy, handling updates, design adjustments, performance optimization, and client collaboration."
      )
    ).toBeInTheDocument();
  });

  it("renders 'Education' section", () => {
    render(<Resume />);
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("The Odin Project")).toBeInTheDocument();
    expect(screen.getByText("Nov 2023 - Present")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Completed full-stack web development coursework, gaining hands-on experience with modern technologies and best practices."
      )
    ).toBeInTheDocument();
  });

  it("renders 'Certifications' after button click", async () => {
    const navButtons = [
      { id: "languages", name: "Languages" },
      { id: "certifications", name: "Certifications" },
      { id: "trainings", name: "Trainings & Seminars" },
    ];

    const setActiveTab = vi.fn();
    const activeTab = "certifications";

    const user = userEvent.setup();

    render(
      <NavButton
        navButtons={navButtons}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );

    const button = screen.getByRole("button", { name: "Certifications" });

    await user.click(button);

    expect(screen.getByText("Certifications")).toBeInTheDocument();
  });
});
