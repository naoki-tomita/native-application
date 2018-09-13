import React from "react";
import { Application } from "../Application";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const rendered = renderer.create(<Application />).toJSON();
  expect(rendered).toBeTruthy();
});
