import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Contact from "../pages/Contact";

test("renders the Contact page correctly", () => {
  render(<Contact />);
  screen.debug();
});
