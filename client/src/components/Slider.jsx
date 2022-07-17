import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.css";

const Slider = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1656274452333-21ffb6662e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h3>Made in Kenya</h3>
            <p>Getting started today to support our local enterprises</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1656275544060-1c0515d192b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h3>Made in Kenya</h3>
            <p>Getting started today to support our local enterprises</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1656299024461-8114ae2dbe6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h3>Made in Kenya</h3>
            <p>Getting started today to support our local enterprises</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
