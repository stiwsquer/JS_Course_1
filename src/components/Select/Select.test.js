import Select from "./Select";

it("renders Select component without crashing", () => {
  const opt = [{ key: "1", value: "2", text: "text" }];
  shallow(<Select options={opt} />);
});
