import React from "react";
import { render, screen } from "@testing-library/react";
import StickyHeader from "../../src/components/StickyHeader/StickyHeader";

describe("Sticky Header Test Group", () => {
  it("should render the correct content", () => {
    render(<StickyHeader id="1" title="Test Title" />);

    const ele = screen.findByTestId("sticky-header");

    console.log(ele);

    // expect(ele).toBeInTheDocument();
  });
});
