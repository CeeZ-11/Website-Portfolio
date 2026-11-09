import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Resume from "../pages/Resume";
import NavButton from "../components/NavButton";

describe("Resume Page", () => {
  it("matches the saved Resume snapshot", () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders 'Experience' section", () => {
    render(<Resume />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Digital Marketing Analyst, PMW")).toBeInTheDocument();
    expect(screen.getByText("MAY 2026 - PRESENT")).toBeInTheDocument();
    expect(screen.getByText(/^Built the Speed Engine/)).toBeInTheDocument();
    expect(screen.getByText("Web Developer | Digital Marketing Analyst, yesVIRTUAL")).toBeInTheDocument();
    expect(screen.getByText("MAR 2025 - APR 2026")).toBeInTheDocument();
    expect(screen.getByText("Web Consultant, Experimentalist & Open Future Institute")).toBeInTheDocument();
  });

  it("renders 'Education' section", () => {
    render(<Resume />);
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("The Odin Project")).toBeInTheDocument();
    expect(screen.getByText("Nov 2023 - Present")).toBeInTheDocument();
    expect(screen.getByText(/^Currently studying full-stack web development/)).toBeInTheDocument();
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
