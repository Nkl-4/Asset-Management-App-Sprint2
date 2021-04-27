import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import * as $ from 'jquery';
import image1 from '../../img/createasset.jfif';
import image2 from '../../img/hp_bg_2.jpg';
import image3 from '../../img/shipment4.jpg';
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
                height={ht * 0.89}
                width={wh}
              />
              <Carousel.Caption style={{ color: 'white' }}>
                <h2>
                  <strong>ASSETS</strong>
                </h2>
                <p>
                  <h3>Add, Delete, Modify & ship Assets</h3>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={image2}
                alt="Second slide"
                height={ht * 0.89}
                width={wh}
              />
              <Carousel.Caption>
                <h2>
                  <strong>WAREHOUSES</strong>
                </h2>
                <p>
                  <h3>Manage warehouse details</h3>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={image3}
                alt="Third slide"
                height={ht * 0.89}
                width={wh}
              />
              <Carousel.Caption>
                <h2>
                  <strong>SHIPMENTS</strong>
                </h2>
                <p>
                  <h3>Maintain your shipments with ease.</h3>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
