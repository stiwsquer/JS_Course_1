import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Card({
  linkTo,
  imgSrcNormal,
  imgSrcAlt,
  imgAltNormal,
  imgAltAlt,
  title,
  text,
  ref,
}) {
  return (
    <div ref={ref} className="card">
      <figure className="card-figure">
        <Link to={linkTo} className="card-image-link">
          <img
            className=" card-image card-image-normal"
            src={imgSrcNormal}
            alt={imgAltNormal}
          />
          <img
            className="card-image  card-image-alt"
            src={imgSrcAlt}
            alt={imgAltAlt}
          />
        </Link>
        <figcaption className="fig-caption">
          <Link to={linkTo}></Link>
        </figcaption>
      </figure>
      <div className="card-body">
        <Link to={linkTo}>
          <h4 className="card-title">{title}</h4>
        </Link>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-swatches"></div>
    </div>
  );
}
