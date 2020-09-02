import React from "react";
import { Button } from "react-bootstrap";
import BookProfile from "../../../images/user.png";

export default (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4>
            <b>
              <span>Dara</span>
            </b>
          </h4>
        </div>
        <div className="col-md-4">
          <h5>
            • រយៈពេល​ (នាទី<span>:</span>វិនាទី) ៖ <span>{props.mainTime}</span>
          </h5>
          <h5>
            • ល្បឿន​ (ពាក្យ / នាទី) ៖ <span>{props.wpm}</span>
          </h5>
        </div>
        <div className="col-md-3">
          <h5>
            • សរុប ៖ <span>{props.total}</span>
          </h5>
          <h5>
            • សុក្រឹតភាព ៖ <span>{props.myAccuracy} %</span>
          </h5>
        </div>
        <div className="col-md-2">
          <h5>
            • ត្រូវ ៖ <span>{props.index}</span>
          </h5>
          <h5>
            • ខុស ៖ <span>{props.inCorrect}</span>
          </h5>
        </div>
        <div
          className="col-md-3"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <Button
            className="button-style2"
            style={{ width: "300px" }}
            variant="primary"
            type="button"
            onClick={() => {
              window.location.reload();
            }}
          >
            ចាប់ផ្តើមម្តងទៀត
          </Button>
        </div>
      </div>
      <div className="row content-info">
        <div className="col-md-3">
          <div className="image-content">
          <img src={props.bookImage == "" ? props.noImage:props.bookImage} />
          </div>
        </div>
        <div className="col-md-9" style={{marginTop: "50px"}}>
            <table>
              <tbody>
              <tr>
                  <td><p>ចំណងជើង</p></td>
                  <td><p>៖​ {props.title}</p></td>
                </tr>
                <tr>
                  <td><p>អ្នកនិពន្ធ</p></td>
                  <td><p>៖ {props.author}</p></td>
                </tr>
                <tr>
                  <td><p>ពិពណ៌នា</p></td>
                  <td><p>៖ {props.desc}</p></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
