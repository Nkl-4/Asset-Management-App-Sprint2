import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/hp_bg_1.jpg';
import image2 from '../../img/hp_bg_2.jpg';
import image3 from '../../img/hp_bg_3.jpg';
export class LandingComponent extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Carousel className="border w-100 col-xs-12">
            <Carousel.Item>
              <img
                className="d-block"
                src={image1}
                alt="First slide"
                height={520}
                width={1370}
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
                height={520}
                width={1370}
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
                height={520}
                width={1370}
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
