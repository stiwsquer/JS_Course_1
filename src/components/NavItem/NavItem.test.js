import NavItem from "./NavItem";

it("renders NavItem component without crashing", () => {
  shallow(<NavItem linkTo="#" />);
});

it("renders one Link component", () => {
  const wrapper = shallow(<NavItem linkTo="#" />);
  expect(wrapper.find("Link")).toHaveLength(1);
});

it("has proper className", () => {
  const wrapper = shallow(<NavItem linkTo="#" iconClass="fa-bars" />);
  expect(wrapper.find("i").first().hasClass("fa-bars")).toBe(true);
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ iconClass: "fa-times" });
  expect(wrapper.find("i").first().hasClass("fa-times"));
  expect(wrapper).toMatchSnapshot();
});

it("renders proper text", () => {
  const wrapper = shallow(<NavItem linkTo="#" text="proper text" />);
  expect(wrapper.find("Link").first().text()).toEqual("proper text");
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ text: "text" });
  expect(wrapper.find("Link").first().text()).toEqual("text");
  expect(wrapper).toMatchSnapshot();
});
