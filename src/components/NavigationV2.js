import React, { useLayoutEffect, useState, useContext } from "react";
import NavItem from "./NavItem";
import SearchBox from "./SearchBox";
import SignInRegisterSearch from "./SignInRegisterSearch";

export default function Navigation(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSerch] = useState(false);
  const [width, height] = useWindowSize();

  const mobileMenuStyle = { display: "flex" };

  if (width > 1000) {
    mobileMenuStyle.display = "flex";
  } else if (width <= 1000 && showMenu === false) {
    mobileMenuStyle.display = "none";
  }

  let burger = <i className="fas fa-bars"></i>;
  if (showMenu === true) {
    burger = <i className="fas fa-times" style={{ position: "fixed" }}></i>;
    mobileMenuStyle.display = "flex";
  }

  let searchBox;
  if (showSearch === true) {
    searchBox = (
      <SearchBox showSearch={showSearch} setShowSerch={setShowSerch} />
    );
  }

  return (
    <>
      <nav className="nav-links">
        <span className="burger" onClick={() => setShowMenu(!showMenu)}>
          {burger}
        </span>

        <SignInRegisterSearch
          mobileMenuStyle={mobileMenuStyle}
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
      {searchBox}
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
