import React from "react";
import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    const onClick = jest.fn();
    render(
      <Button variant="primary" onClick={onClick}>
        Click aquí
      </Button>
    );
  });
});
