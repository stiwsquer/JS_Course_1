import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sign In link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign in/i);
  expect(linkElement).toBeInTheDocument();
});
