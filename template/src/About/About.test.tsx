import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from "./About";

test("renders title", () => {
  render(<About />);
  const titleElement = screen.getByRole("heading");
  expect(titleElement).toHaveTextContent("About");
});
