import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import {Link} from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div className="row m-0" style={{width: "100%", display: this.props.isAdmin?"none":""}}>
        <div className="col-md-12 m-0 p-0">
          <div className="footer">
            <div className="footer-bg">
              <div className="row m-0">
                <div className="col-md-2">
                  <img
                    src="/image/KSHRD.png"
                    alt="loading"
                    className="image-style"
                  />
                </div>
                <div className="col-md-4">
                  <h5 className="footer-header">
                    <span>KOREA SOFTWARE HRD CENTER</span>
                  </h5>
                  <p className="footer-text">
                    <span>
                      The Best Software Expert Training
                      <br /> Center in Cambodia <br /><br />8th(COVID-19) Generation
                    </span>
                  </p>
                </div>
                <div className="col-md-2" style={{textAlign: "left"}}>
                  <h5 className="footer-header">
                    <span>ANY PROBLEM ?</span>
                  </h5>
                  <Link to="/report">
                  <Button variant="danger" style={{width: "170px", borderRadius: "25px"}}>
                    <b><span>Report Us</span></b>
                  </Button>
                  </Link>
                </div>
                <div className="col-md-4" style={{paddingLeft: "75px"}}>
                  <h5 className="footer-header">
                    <span>CONTACT</span>
                  </h5>
                    <table className="footer-text">
                      <tbody>
                      <tr>
                        <td style={{verticalAlign: "top"}}>
                          <img
                            src="/image/address.png"
                            alt="address"
                            width="25px"
                            height="25px"
                          />
                        </td>
                        <td>
                          <span>
                            No.12, St. 323, Boeung Kak II <br />
                            Commune, Toul Kork District, <br />
                            Phnom Penh Cambodia
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/image/email.png"
                            alt="email"
                            width="24px"
                            height="24px"
                          />
                        </td>
                        <td><span>phirm.gm@gmail.com</span></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            width="25px"
                            height="25px"
                            src="/image/phone.png"
                            alt="phone"
                          />
                        </td>
                        <td><span>(+855)23-991-314</span></td>
                      </tr>
                      </tbody>
                    </table>
                </div>
              </div>
              <p className="bottom-text" id="contact">
                <span>Copyright &copy; 2020. All Rights Reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
