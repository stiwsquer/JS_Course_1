import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Button from "../Button/Button";
import CardModal from "../CardModal/CardModal";

export default function Card({ linkTo, imagesSources, title, text }) {
  const [imgSrc, setImgSrc] = useState(imagesSources[0].src);
  const [imgSrcHover, setImgSrcHover] = useState(imagesSources[0].srcHover);
  const [imgAlt, setImgAlt] = useState(imagesSources[0].imgAlt);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputRadioClick = (e) => {
    setImgSrc(imagesSources[e.target.value].src);
    setImgSrcHover(imagesSources[e.target.value].srcHover);
    setImgAlt(imagesSources[e.target.value].imgAlt);
  };

  return (
    <div className="card">
      <figure className="card-figure">
        <Link to={linkTo} className="card-image-link">
          <img
            className=" card-image card-image-normal"
            src={imgSrc}
            alt={imgAlt}
          />
          <img
            className="card-image  card-image-alt"
            src={imgSrcHover}
            alt={imgAlt}
          />
        </Link>
        <figcaption className="fig-caption">
          <Button
            onClick={() => {
              setIsModalOpen(true);
            }}
          ></Button>

          <CardModal
            open={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            imagesSources={imagesSources}
            title={title}
            text={text}
          ></CardModal>
        </figcaption>
      </figure>
      <div className="card-body">
        <Link to={linkTo}>
          <h4 className="card-title">{title}</h4>
        </Link>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-swatches">
        {imagesSources.map((source, index) => {
          return (
            <div key={index} className="radio">
              <input
                onClick={handleInputRadioClick}
                value={index}
                id="radio1"
                type="radio"
                name="swatch"
              ></input>
              <label htmlFor="" id="radio1" className="radio-label">
                <span
                  style={{
                    background: source.backgroundColor,
                  }}
                ></span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
