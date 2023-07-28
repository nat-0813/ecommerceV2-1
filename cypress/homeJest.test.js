// Test className on hero section
it("applies heroImage class to hero section", () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toHaveClass("heroImage");
});

// Test Click event on button
it("calls onClick when Shop Now is clicked", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Home onShopClick={onClick} />);

  const button = getByText("Shop Now");
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

// Test hero text content
it("renders correct hero text", () => {
  const { getByText } = render(<Home />);

  getByText("Welcome");
  getByText("Feeling adventurous?");
});

// Test Slider render count
it("renders Slider component once", () => {
  const mockSlider = jest.fn();

  jest.mock("../components/slider", () => mockSlider);

  render(<Home />);

  expect(mockSlider).toHaveBeenCalledTimes(1);
});
