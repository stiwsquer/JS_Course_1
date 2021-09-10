import Button from "../Button/Button";
import React, { useEffect, useMemo } from "react";
import ReactDom from "react-dom";
import "./style.scss";
import OutsideAlerter from "../OutsideAlerter/OutsideAlerter";
// import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
export default function CardModal({
  children,
  open,
  setIsModalOpen,
  imagesSources,
  title,
  text,
}) {
  if (!open) return null;

  const breakPoints = useMemo(() => {
    return [{ width: 1, itemsToShow: 1 }];
  }, []);

  const images = useMemo(() => {
    const temporaryImages = [];
    imagesSources.map((source) => {
      temporaryImages.push(<img key={source.src} src={source.src} alt="" />);
      temporaryImages.push(
        <img key={source.srcHover} src={source.srcHover} alt="" />
      );
    });
    return temporaryImages;
  }, []);

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <OutsideAlerter setShowElement={setIsModalOpen}>
        <div className="modal">
          <Button
            nameOfTheClass="close-modal-btn"
            onClick={() => setIsModalOpen(false)}
          >
            <i className="fas fa-times"></i>
          </Button>
          {children}
          <div className="slider">
            <Carousel breakPoints={breakPoints}>{images}</Carousel>
          </div>
          <div className="description">
            sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddd ddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddd ddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddd ddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddd ddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
            sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddd ddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddd
          </div>
        </div>
      </OutsideAlerter>
    </>,
    document.getElementById("portal")
  );
}
