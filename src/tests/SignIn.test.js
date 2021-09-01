import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import SignIn from "../components/SignIn/SignIn";
import toJson from "enzyme-to-json";

it("renders SignIn component without crashing", () => {
  shallow(<SignIn />);
});
