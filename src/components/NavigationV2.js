import React, { useLayoutEffect, useState, useContext, useRef } from "react";
import NavItem from "./NavItem";
import OutsideAlerter from "./OutsideAlerter";
import SearchBox from "./SearchBox";
import SignInRegisterSearch from "./SignInRegisterSearch";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSerch] = useState(false);
  const [width, height] = useWindowSize([0, 0]);

  const handleShowMenu = () => setShowMenu((prev) => !prev);

  let signInRegisterSearchClassName = "signIn-register-search";
  if (width < 1000 && !showMenu) {
    signInRegisterSearchClassName = "inactive-signIn-register-search";
  }

  return (
    <>
      <nav className="nav-links">
        <span className="burger" onClick={handleShowMenu}>
          <i
            style={{ position: showMenu ? "fixed" : "" }}
            className={showMenu ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </span>

        <SignInRegisterSearch
          nameOfTheClass={signInRegisterSearchClassName}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          setShowSerch={setShowSerch}
          showSearch={showSearch}
        />

        <h1 className="logo">
          <NavItem linkTo="/" text="DressUp" />
        </h1>

        <div className="cart">
          <NavItem linkTo="#" iconClass="fas fa-shopping-cart" text="Cart" />
        </div>
      </nav>
      <OutsideAlerter setShowSerch={setShowSerch}>
        <SearchBox
          nameOfTheClass={showSearch ? "search-box" : "inactive-search"}
          showSearch={showSearch}
          setShowSerch={setShowSerch}
        />
      </OutsideAlerter>
    </>
  );
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
