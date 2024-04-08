import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tile from "./Tile";

/**
 * test scenario for Tile Component
 *
 *  - renders with name, score, and avatar
 *  - renders without avatar
 *
 */

describe("Tile component", () => {
  it("renders with name, score, and avatar", () => {
    const name = "Berli";
    const score = 100;
    const avatar =
      "https://ui-avatars.com/api/?name=Dicoding&background=random";

    render(<Tile name={name} score={score} avatar={avatar} />);

    const nameElement = screen.getByText(name);
    const scoreElement = screen.getByText(score.toString());
    const avatarElement = screen.getByAltText(name);

    expect(nameElement).toBeTruthy();
    expect(scoreElement).toBeTruthy();
    expect(avatarElement).toBeTruthy();
  });

  it("renders without avatar", () => {
    const name = "John Doe";
    const score = 100;

    render(<Tile name={name} score={score} />);

    const nameElement = screen.getByText(name);
    const scoreElement = screen.getByText(score.toString());
    const avatarElement = screen.queryByAltText(`${name}'s avatar`);

    expect(nameElement).toBeTruthy();
    expect(scoreElement).toBeTruthy();
    expect(avatarElement).not.toBeTruthy();
  });
});
