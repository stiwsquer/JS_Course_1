import Layout from "./Layout";

it("renders Layout component without crashing", () => {
  shallow(<Layout />);
});

it("contains one Switch component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Switch")).toHaveLength(1);
});

it("contains three Route component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Route")).toHaveLength(3);
});

it("contains one NewsletterForm component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("NewsletterForm")).toHaveLength(1);
});

it("contains one Footer component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Footer")).toHaveLength(1);
});

it("contains one Header component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Header")).toHaveLength(1);
});

it("contains one SignIn component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("SignIn")).toHaveLength(1);
});

it("contains one Register component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Register")).toHaveLength(1);
});

it("contains one Home component", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.find("Home")).toHaveLength(1);
});

it("Layour snapshot - shallow", () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper).toMatchSnapshot();
});
