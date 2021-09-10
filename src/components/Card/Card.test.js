import Card from "./Card";
import { Link } from "react-router-dom";

const imgSrc = [
  {
    src: "./img/products/01.0.jpg",
    srcHover: "./img/products/01.1.jpg",
    imgAlt: "Image of women in a dress",
    title: "Fiercely Fabulous Leopard Ruched Mini Dress",
    text: "$44.00",
    backgroundColor:
      'url("https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/768w/attribute_value_images/73764.preview.jpg?t=1630492842)"',
  },
];

it("renders Card component without crashing", () => {
  shallow(<Card linkTo="#" imagesSources={imgSrc} />);
});

it("renders two <Link /> components", () => {
  const wrapper = shallow(<Card linkTo="#" imagesSources={imgSrc} />);
  expect(wrapper.find(Link)).toHaveLength(2);
});

it("contains h4 element", () => {
  const wrapper = shallow(<Card linkTo="#" imagesSources={imgSrc} />);
  expect(wrapper.find("h4")).toHaveLength(1);
});

it("Card snapshot", () => {
  const component = shallow(<Card linkTo="#" imagesSources={imgSrc} />);

  expect(component).toMatchSnapshot();

  component.find("figure").simulate("hover");

  expect(component).toMatchSnapshot();
});
