import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import graffitiglazaImg from "../components/assets/graffiti_glaza_art.jpg";
import koshkaoknoImg from "../components/assets/koshkaokno.jpg";
import kotkryshaImg from "../components/assets/kot_krysha_gorod.jpg";
export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={graffitiglazaImg}
            atl="graffiti_glaza_art"
          />
          <Carousel.Caption>
            <h3>graffiti_glaza_art</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={koshkaoknoImg}
            atl="graffiti_glaza_art"
          />
          <Carousel.Caption>
            <h3>koshkaokno</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kotkryshaImg}
            atl="graffiti_glaza_art"
          />
          <Carousel.Caption>
            <h3>kot_krysha_gorod</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
