import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import "./style.scss";
import Card from "../Card/Card";
export default function HomeProducts() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 2100, itemsToShow: 6 },
    { width: 3000, itemsToShow: 7 },
    { width: 3500, itemsToShow: 8 },
  ];

  return (
    <section className="home-products">
      <div className="products-title">
        <span className="horizontal-line"></span>
        <h2>NEW PRODUCTS</h2>
        <span className="horizontal-line"></span>
      </div>
      <div className="cards">
        <Carousel breakPoints={breakPoints}>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/1.JPG"}
            imgSrcAlt={"./img/products/1.2.webp"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Fiercely Fabulous Leopard Ruched Mini Dress"
            text="$44.00"
          ></Card>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/2.webp"}
            imgSrcAlt={"./img/products/2.1.webp"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Tame My Heart Leopard Tie-Front Dress"
            text="$40.00"
          ></Card>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/3.webp"}
            imgSrcAlt={"./img/products/3.1.webp"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Keepin' It Chic Tiered Dress "
            text="$33.00"
          ></Card>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/4.webp"}
            imgSrcAlt={"./img/products/4.1.JPG"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Walk The Walk Mini Skirt"
            text="$39.00"
          ></Card>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/5.JPG"}
            imgSrcAlt={"./img/products/5.1.JPG"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Just The One Floral Dress - Mustard"
            text="$44.00"
          ></Card>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/6.webp"}
            imgSrcAlt={"./img/products/6.1.webp"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Iconic Style Tie-Front Blouse"
            text="$35.00"
          ></Card>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/7.JPG"}
            imgSrcAlt={"./img/products/7.1.JPG"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Wild Spirit Leopard Babydoll Dress"
            text="$41.00"
          ></Card>
          <Card
            linkTo="#"
            imgSrcNormal={"./img/products/8.webp"}
            imgSrcAlt={"./img/products/8.1.webp"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Wild Impression Leopard Blouse"
            text="$33.00"
          ></Card>
        </Carousel>
      </div>
    </section>
  );
}
