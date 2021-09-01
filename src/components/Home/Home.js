import React from "react";
import "./style.scss";

import HomeDescription from "../HomeDescription/HomeDescription";
import HomeGallery from "../HomeGallery/HomeGallery";
import HomeProducts from "../HomeProducts/HomeProducts";

export default function Home() {
  return (
    <>
      <section className="home-intro"></section>
      <HomeDescription />
      <HomeGallery />
      <HomeProducts />
    </>
  );
}
