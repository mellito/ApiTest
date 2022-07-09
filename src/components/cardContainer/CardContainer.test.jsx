import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CardContiner from "./CardContiner";

test("renders CarContianer Component", () => {
  const { getByText } = render(
    <CardContiner title="Test Component">
      <div>Test</div>
    </CardContiner>,
  );
  const linkElement = getByText(/Test Component/i);
  expect(linkElement).toBeInTheDocument();
});
