import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import toJson from "enzyme-to-json";

it("renders HomeProducts component without crashing", () => {
  shallow(<HomeProducts />);
});
