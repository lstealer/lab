import React from "react";
import { Carousel, Button } from "react-bootstrap";
import first from "../../../images/1.jpg";
import "./Home.css";
import "../../../App.css";
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <div>
      <div className="group-button">
        <div className="button-mode">
          <Link to="/practice"><Button className="button-style2">អនុវត្ត</Button></Link>
        </div>
        <div className="button-mode">
          <Link to="/solo">
          <Button className="button-style2">ប្រកួតម្នាក់ឯង</Button>
          </Link>
        </div>
        <div className="button-mode">
          <Link to="/party"><Button className="button-style2">ប្រកួតក្នុងក្រុម</Button></Link>
        </div>
      </div>
      <div className="banner">
        <h3><p style={{color: "#00c6ff"}}>លេងកម្សាន្តជាមួយ​<span> KH Racer</span></p></h3>
        <h2>អ្នកនឹងទទួលបានបទពិសោធន៍ថ្មី</h2>
        <h2>ក្នុងការវាស់ល្បឿននៃការវាយអក្សរជាភាសាខ្មែរ</h2>
      </div>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="First slide" />
          <Carousel.Caption style={{ textAlign: "left" }}></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
