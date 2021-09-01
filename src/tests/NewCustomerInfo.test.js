import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import NewCustomerInfo from "../components/NewCustomerInfo/NewCustomerInfo";
import toJson from "enzyme-to-json";

it("renders NewCustomerInfo component without crashing", () => {
  shallow(<NewCustomerInfo />);
});
