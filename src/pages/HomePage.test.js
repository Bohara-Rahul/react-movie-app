import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import HomePage from "./HomePage";

test('homepage shows the title of the page', () => {
  render(<HomePage />);

  const title = screen.getByRole('heading', {
    name: /movie app/i
  })

  expect(title).toBeInTheDocument()
})