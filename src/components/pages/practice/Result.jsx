import React from "react";
import {Button} from "react-bootstrap";

export default (props) => {
    
    return(
        <div className="container">
             <div className="row">
             <div className="col-md-12">
                <h4>Dara</h4>
              </div>
              <div className="col-md-5">
                <h5>• រយៈពេល​ ៖ {props.mainTime}</h5>
                <h5>• ល្បឿន​ (ពាក្យ/នាទី) ៖ {props.wpm}</h5>
              </div>
              <div className="col-md-3">
                <h5>• សរុប ៖ {props.total}</h5>
                <h5>• សុក្រឹតភាព ៖ {props.myAccuracy} %</h5>
              </div>
              <div className="col-md-2">
                <h5>• ត្រូវ ៖ {props.index}</h5>
                <h5>• ខុស ៖ {props.inCorrect}</h5>
              </div>
              <div
                className="col-md-2"
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  marginBottom: "25px",
                }}
              >
                <Button
                  style={{ width: "200px" }}
                  variant="primary"
                  type="button"
                  onClick={()=>{
                    window.location.reload();
                  }}
                >
                  Restart
                </Button>
              </div>
            </div>
        </div>
    )
}