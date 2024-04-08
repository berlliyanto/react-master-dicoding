import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Divider from "./Divider";

/**
 * test scenario for Tile Component
 *
 *  - renders with default margin
 *  - renders with custom margin
 *  - accepts margin prop as number
 *  - throws error for invalid margin prop
 *
 */

describe("Divider Component", () => {
  it("renders with default margin", () => {
    render(<Divider />);

    const divider = screen.getByTestId('divider');

    expect(divider).toBeTruthy();

    const computedStyles = window.getComputedStyle(divider);
    expect(computedStyles.marginTop).toBe('5px');
    expect(computedStyles.marginBottom).toBe('5px');
  });

  it("renders with custom margin", () => {
    const margin = 10;
    render(<Divider margin={margin} />);

    const divider = screen.getByTestId('divider');

    expect(divider).toBeTruthy();

    const computedStyles = window.getComputedStyle(divider);
    expect(computedStyles.marginTop).toBe(`${margin}px`);
    expect(computedStyles.marginBottom).toBe(`${margin}px`);
  });

  it("accepts margin prop as number", () => {
    const margin = 15;
    render(<Divider margin={margin} />);

    const divider = screen.getByTestId('divider');

    expect(divider).toBeTruthy();

    const computedStyles = window.getComputedStyle(divider);
    expect(computedStyles.marginTop).toBe(`${margin}px`);
    expect(computedStyles.marginBottom).toBe(`${margin}px`);
  });

  it("throws error for invalid margin prop", () => {
    const originalError = console.error;
    console.error = vi.fn();

    render(<Divider margin="invalid" />);

    expect(console.error).toHaveBeenCalled();

    console.error = originalError;
  });
});
