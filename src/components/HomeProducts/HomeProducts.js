import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./style.scss";
import Card from "../Card/Card";
export default function HomeProducts() {
  const [cards, setCards] = useState([]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 2100, itemsToShow: 6 },
    { width: 3000, itemsToShow: 7 },
    { width: 3500, itemsToShow: 8 },
  ];

  const getProducts = async () => {
    try {
      let products = await fetch("/products.json");
      let json = await products.json();
      const Cards = json.map((card, index) => {
        return (
          <Card
            key={index}
            linkTo="#"
            title={card[0].title}
            text={card[0].text}
            imagesSources={card}
          ></Card>
        );
      });
      setCards(Cards);
      return Cards;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(getProducts, []);

  // const imgs = [
  //   {
  //     src: "./img/products/1.JPG",
  //     srcHover: "./img/products/1.2.webp",
  //     imgAlt: "Image of women in a dress",
  //     backgroundColor: `url("https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/768w/attribute_value_images/73764.preview.jpg?t=1630492842`,
  //   },
  //   {
  //     src: "./img/products/2.webp",
  //     srcHover: "./img/products/2.1.webp",
  //     imgAlt: "Image of women in a dress",
  //     backgroundColor: `url("https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/768w/attribute_value_images/73764.preview.jpg?t=1630492842`,
  //   },
  // ];
  return (
    <section className="home-products">
      <div className="products-title">
        <span className="horizontal-line"></span>
        <h2>NEW PRODUCTS</h2>
        <span className="horizontal-line"></span>
      </div>
      {/**
       * @TODO move all products info to an external file and process it here
       */}
      <div className="cards">
        <Carousel breakPoints={breakPoints}>
          {cards}
          {/* <Card
            linkTo="#"
            title="Fiercely Fabulous Leopard Ruched Mini Dress"
            text="$44.00"
            imagesSources={imgs}
            // backgroundColor2='url("https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/768w/attribute_value_images/73764.preview.jpg?t=1630492842")'
          ></Card> */}

          {/* <Card
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
            imgSrcNormal2={"./img/products/6.2.webp"}
            imgSrcAlt2={"./img/products/6.3.JPG"}
            imgAltNormal="Image of women in a dress"
            imgAltAlt="Image of women in a dress"
            title="Iconic Style Tie-Front Blouse"
            text="$35.00"
            backgroundColor="blue"
            backgroundColor2='url("https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/768w/attribute_value_images/73764.preview.jpg?t=1630492842")'
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
          ></Card> */}
        </Carousel>
      </div>
    </section>
  );
}
