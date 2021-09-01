import React from "react";
import renderer from "react-test-renderer";
import { shallow, mount, render, EnzymeAdapter } from "enzyme";
import sinon from "sinon";
import NewsletterForm from "../components/NewsletterForm/NewsletterForm";
import toJson from "enzyme-to-json";

it("renders NewsletterForm component without crashing", () => {
  shallow(<NewsletterForm />);
});
