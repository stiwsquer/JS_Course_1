import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "../components/Navigation/NavigationV2";
import NavItem from "../components/NavItem/NavItem";
import { SearchContextProvider } from "../context/SearchContext";

it("renders Navigation component without crashing", () => {
  shallow(<Navigation />);
});

it("renders two <NavItem /> components", () => {
  const wrapper = shallow(<Navigation />);
  expect(wrapper.find(NavItem)).toHaveLength(2);
});

it("simulates opening mobile menu", () => {
  const wrapper = mount(
    <SearchContextProvider>
      <Router>
        <Navigation />
      </Router>
    </SearchContextProvider>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("i").first().hasClass("fa-bars")).toEqual(true);

  wrapper.find("span").simulate("click");

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("i").first().hasClass("fa-times")).toEqual(true);
});
