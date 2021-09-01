import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import Header from "../components/Header/Header";
import toJson from "enzyme-to-json";

it("renders Header component without crashing", () => {
  // shallow(<Header />);
});
