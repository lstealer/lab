import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Home.css";
import "../../../App.css";

export default (props) => {
  return (
    <div className="container" >
      <div className="row">
        <div
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "18rem" }} className="my-card">
            <Card.Body>
              <Card.Title>
                <h3>អនុវត្ត</h3>
              </Card.Title>

              <p>សាកល្បង ហាត់វាយអក្សរខ្មែរ</p>
              <p>ម្នាក់ឯងក្នុងរង្វាស់</p>
              <p>
                <span>wpm (Words Per Minute)</span>
              </p>
              <p> ១​ ពាក្យ​ = ៥ តួរអក្សរ ឫ ៥ ក្តារចុច</p>

              <button className="button-style1">​ចាប់ផ្តើម</button>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "18rem" }} className="my-card">
            <Card.Body>
              <Card.Title>
                <h3>ប្រកួតម្នាក់ឯង</h3>
              </Card.Title>

              <p>សាកល្បង ប្រកួតវាយអក្សរខ្មែរ</p>
              <p>ជាមួយ អ្នកមិនស្គាល់</p>
              <p>៤ នាក់ផ្សេងទៀត</p>
              <p>ដើម្បីដណ្តើមជ័យលាភី</p>

              <button className="button-style1">​ចាប់ផ្តើម</button>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "18rem" }} className="my-card">
            <Card.Body>
              <Card.Title>
                <h3>ប្រកួតក្នុងក្រុម</h3>
              </Card.Title>

              <p>សាកល្បង ប្រកួតវាយអក្សរខ្មែរ</p>
              <p>ជាមួយ មិត្តភក្តិក្នុងក្រុម</p>
              <p>តាមរយៈតំណភ្ជាប់</p>
              <p>ដើម្បីដណ្តើមជ័យលាភី</p>

              <button className="button-style1">​ចាប់ផ្តើម</button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
