import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router"
import ItemCard from "./ItemCard"

function renderComponent() {
  const item = {
    id: 123768,
    media_type: "movie",
    title: "Help me find the purpose" 
  }
  render(<MemoryRouter>
      <ItemCard item={item} />
    </MemoryRouter>
  )

  return { item }
}
  
  test("item card component should contain movie name", () => {
    const { item } = renderComponent()

    const movieName = screen.getByRole("heading", {
      name: /help me find the purpose/i
    });

    expect(movieName).toBeInTheDocument()
  })
