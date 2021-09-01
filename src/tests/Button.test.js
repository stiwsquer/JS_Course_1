import { BrowserRouter as Router } from "react-router-dom";
import Button from "../components/Button/Button";

it("renders Button component without crashing", () => {
  shallow(
    <Router>
      <Button linkTo="#" />
    </Router>
  );
});

// 

it("simulates click events", () => {
  const onButtonClick = sinon.spy();
  const buttonWrapper = mount(
    <Router>
      <Button
        linkTo="#"
        type="submit"
        nameOfTheClass="submitButton"
        onClick={onButtonClick}
      />
    </Router>
  );
  buttonWrapper.find("button").simulate("click");
  // expect(onButtonClick).toHaveProperty("callCount", 1);
  expect(onButtonClick.calledOnce).toBe(true);
});

it("renders children when passed in", () => {
  const wrapper = shallow(
    <Router>
      {" "}
      <Button linkTo="#">
        <div className="unique" />
      </Button>
    </Router>
  );
  expect(wrapper.contains(<div className="unique" />)).toEqual(true);
});
it("Button snapshot - shallow", () => {
  const tree = shallow(
    <Router>
      <Button
        linkTo="#"
        type="submit"
        nameOfTheClass="submitButton"
        onClick={() => {}}
      />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});

it("Button snapshot - render", () => {
  const tree = render(
    <Router>
      <Button
        linkTo="#"
        type="submit"
        nameOfTheClass="submitButton"
        onClick={() => {}}
      />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});

it("Button snapshot - mount", () => {
  const tree = mount(
    <Router>
      <Button
        linkTo="#"
        type="submit"
        nameOfTheClass="submitButton"
        onClick={() => {}}
      />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});
