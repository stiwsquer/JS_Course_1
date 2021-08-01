import React, { useContext } from "react";
import Link from "./link";

export default function Header(props) {
  return (
    <header className="main-head">
      <nav>
        <ul className="nav-links">
          <div className="signIn-register-search">
            <li>
              <Link href="#" class="fas fa-sign-in-alt" text="Sign in" />
            </li>

            <li>
              <Link href="#" text="Register" />
            </li>

            <li>
              <Link href="#" class="fas fa-search" text="Search" />
            </li>
          </div>

          <div className="logo-cart">
            <h1 className="logo">
              <Link href="#" text="DressUp" />
            </h1>
            <li>
              <Link href="#" class="fas fa-shopping-cart" text="Cart" />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
