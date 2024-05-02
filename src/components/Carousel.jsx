import React, { Component } from "react";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % images.length
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? images.length - 1
          : prevState.currentIndex - 1
    }));
  };

  render() {
    const { currentIndex } = this.state;
    const { title, img, subtitle } = images[currentIndex];

    return (
      <div className="carousel-container">
        <div className="arrow left-arrow" onClick={this.handlePrev}>
          <ArrowBackIosIcon />
        </div>
        <div className="carousel-content">
          <h1 className="title">{title}</h1>
          <img src={img} alt={title} className="image" />
          <h3 className="subtitle">{subtitle}</h3>
        </div>
        <div className="arrow right-arrow" onClick={this.handleNext}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    );
  }
}

export default Carousel;
