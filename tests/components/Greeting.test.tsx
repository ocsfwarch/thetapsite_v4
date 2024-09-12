import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greeting from "../../src/components/Greeting/Greeting";

describe("Greeting Test Group", () => {
  it("should display the correct content", () => {
    render(<Greeting name="test1" title="test2" narrative="test3" />);

    const headings = screen.getAllByRole("heading");

    expect(headings.length).toBe(3);
    expect(headings[0]).toHaveTextContent(/test1/i);
    expect(headings[1]).toHaveTextContent(/test2/i);
    expect(headings[2]).toHaveTextContent(/test3/i);
  });
});
