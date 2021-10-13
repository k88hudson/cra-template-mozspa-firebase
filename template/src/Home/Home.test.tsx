import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

test("renders download button", () => {
  render(<Home />);
  const downloadButton = screen.getByText(/download firefox/i);
  expect(downloadButton).toBeInTheDocument();
});
