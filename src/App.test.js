import { render, fireEvent, screen } from '@testing-library/react'
import App from './App';

describe("<App />", () => {
  it("Test List Movies Are available", () => {
    const { getByText } = render(<App />);
    expect(getByText(/List Movies/i)).toBeInTheDocument();
  });
});

describe("<App />", () => {
  it("Test Search Button Are Available", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Search/i)).toBeInTheDocument();
  });
});