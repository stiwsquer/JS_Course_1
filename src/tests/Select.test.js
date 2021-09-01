import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import Select from "../components/Select/Select";
import toJson from "enzyme-to-json";

it("renders Select component without crashing", () => {
  const opt = [{ key: "1", value: "2", text: "text" }];
  shallow(<Select options={opt} />);
});
