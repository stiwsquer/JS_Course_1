import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import Register from "../components/Register/Register";
import toJson from "enzyme-to-json";

it("renders Register component without crashing", () => {
  shallow(<Register />);
});
