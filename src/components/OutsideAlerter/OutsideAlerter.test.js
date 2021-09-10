import OutsideAlerter from "./OutsideAlerter";
import SearchBox from "../SearchBox/SearchBox";

it("renders OutsideAlerter component without crashing", () => {
  shallow(
    <OutsideAlerter>
      <SearchBox />
    </OutsideAlerter>
  );
});
