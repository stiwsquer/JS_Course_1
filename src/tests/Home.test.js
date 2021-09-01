import Home from "../components/Home/Home";
import HomeDescription from "../components/HomeDescription/HomeDescription";
import HomeGallery from "../components/HomeGallery/HomeGallery";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import { BrowserRouter as Router } from "react-router-dom";
import { mount } from "enzyme";

it("renders Home component without crashing", () => {
  shallow(<Home />);
});

it("contains section element", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<section className="home-intro"></section>)).toBe(
    true
  );
});

it("contains HomoDescription component", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<HomeDescription />)).toBe(true);
});

it("contains HomeGallery component", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<HomeGallery />)).toBe(true);
});

it("contains HomeProducts component", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.contains(<HomeProducts />)).toBe(true);
});

it("Home snapshot - shallow", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});

it("Home snapshot - render", () => {
  const wrapper = render(
    <Router>
      <Home />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
