import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import Portfolio from "../pages/Portfolio";

test("renders the Portfolio page correctly", () => {
  render(<Portfolio />);
  screen.debug();
});
