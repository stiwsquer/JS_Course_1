import OutsideAlerter from "../components/OutsideAlerter/OutsideAlerter";
import SearchBox from "../components/SearchBox/SearchBox";

it("renders OutsideAlerter component without crashing", () => {
  shallow(
    <OutsideAlerter>
      <SearchBox />
    </OutsideAlerter>
  );
});
