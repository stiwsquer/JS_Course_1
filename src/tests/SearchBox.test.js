import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import SearchBox from "../components/SearchBox/SearchBox";
import toJson from "enzyme-to-json";

it("renders SearchBox component without crashing", () => {
  // shallow(<SearchBox />);
});
