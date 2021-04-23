import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import * as $ from 'jquery';
import image1 from '../../img/hp_bg_1.jpg';
import image2 from '../../img/hp_bg_2.jpg';
import image3 from '../../img/hp_bg_3.jpg';
export class LandingComponent extends Component {
  render() {
    let ht = $(window).height();
    let wh = $(window).width();
    return (
      <div className="container-fluid">
        <div className="row">
          <Carousel className="border col-xs-12">
            <Carousel.Item>
              <img
                className="d-block"
                src={image1}
                alt="First slide"
                height={ht * 0.85}
                width={wh}
              />
              <Carousel.Caption style={{ color: 'black' }}>
                <h3>Assets</h3>
                <p>Add, Delete, Modify & ship Assets</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={image2}
                alt="Second slide"
                height={ht * 0.85}
                width={wh}
              />
              <Carousel.Caption>
                <h3>Warehouses</h3>
                <p>Manage warehouse details</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={image3}
                alt="Third slide"
                height={ht * 0.85}
                width={wh}
              />
              <Carousel.Caption>
                <h3>Shipments</h3>
                <p>Track your shipments with ease.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
