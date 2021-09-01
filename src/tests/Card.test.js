import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

it("renders Card component without crashing", () => {
  shallow(<Card linkTo="#" />);
});

it("renders three <Link /> components", () => {
  const wrapper = shallow(<Card linkTo="#" />);
  expect(wrapper.find(Link)).toHaveLength(3);
});

it("contains h4 element", () => {
  const wrapper = shallow(<Card linkTo="#" />);
  expect(wrapper.find("h4")).toHaveLength(1);
});

it("Card snapshot", () => {
  const component = shallow(<Card linkTo="#" />);

  expect(component).toMatchSnapshot();

  component.find("figure").simulate("hover");

  expect(component).toMatchSnapshot();
});
