import React from "react";
import { Carousel, Button } from "react-bootstrap";
import first from '../../../images/1.jpg';
import './Home.css';
import '../../../App.css';

export default (props) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
         
          <Carousel.Caption style={{textAlign: "left"}}>
            <div className="button-mode">
            <Button className="button-style2">អនុវត្ត</Button>
            </div>
            <div className="button-mode">
            <Button className="button-style2">ប្រកួតម្នាក់ឯង</Button>
            </div>
            <div className="button-mode">
            <Button className="button-style2">ប្រកួតក្នុងក្រុម</Button>
            </div>
            <div>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>                      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={first}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={first}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
