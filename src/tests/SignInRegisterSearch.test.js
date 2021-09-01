import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import SignInRegisterSearch from "../components/SignInRegisterSearch/SignInRegisterSearch";
import toJson from "enzyme-to-json";

it("renders SignInRegisterSearch component without crashing", () => {
  shallow(<SignInRegisterSearch />);
});
