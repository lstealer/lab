import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./Profile.css";
import MyTable from "./table/MyTable";
import { getPlayerHistories } from "../../../redux/actions/playerHistoriesAction/playerHistoriesAction";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const header = [
  "លរ",
  "ល្បឿន(ពាក្យ/នាទី)",
  "សុក្រឹត្យភាព",
  "ចំណាត់ថ្នាក់",
  "កាលបរិច្ឆេទ",
];

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      IS_UPDATE: false,
      id: "",
      name: "",
      gender: "",
      email: "",
      dob: null,
      content: [],
    };
  }

  dateOnChange = (evt) => {
    this.setState({ dob: evt });
  };

  componentWillMount() {
    console.log(" ID PARAM:", this.props.match.params.id);
    this.props.getPlayerHistories(this.props.match.params.id);
    let myUser = JSON.parse(localStorage.getItem("signin"));
    if (myUser && myUser.email) {
      this.setState({
        id: myUser.id,
        name: myUser.name,
        gender: myUser.gender,
        email: myUser.email,
        dob: new Date(Date.parse(myUser.dob)),
        isSignin: true,
      });
    }
  }

  render() {
    try {
      console.log("PLATER HISTORIES: ", this.props.data.data);
      if (this.state.content.length == 0) {
        if (this.props.data.data.length !== 0) {
          this.setState(
            {
              content: this.props.data.data,
            },
            () => {
              console.log("CONTENT: ", this.state.content);
            }
          );
        }
      }
    } catch (error) {
      console.log(error);
    }

    return (
      <div className="container">
        <div className="row m-0">
          <div className="col-md-12 profile-position">
            <img src="/image/KSHRD.png" alt="Profile" className="profile-img" />
            <div className="id-position">
              <p>
                លេខសម្គាល់​: <span>{this.state.id}</span>
              </p>
              {this.state.IS_UPDATE ? (
                <div className="profile-edit">
                  <Link>រក្សាទុក</Link>&nbsp;<Link>បោះបង់</Link>
                </div>
              ) : (
                <Link>កែប្រែ</Link>
              )}
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-6 profile-margin">
            <Form.Group>
              <Form.Label className="left-label-style">ឈ្មោះ</Form.Label>
              <Form.Control
                style={{
                  fontFamily:
                    '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                }}
                type="text"
                value={this.state.name}
                className="rounded-pill left-textbox-style"
                readOnly={this.state.IS_UPDATE ? false : true}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="left-label-style">ភេទ</Form.Label>
              <Form.Control
                style={{
                  fontFamily:
                    '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                }}
                as="select"
                defaultValue={this.state.gender}
                className="rounded-pill left-textbox-style gender-style"
                disabled={this.state.IS_UPDATE ? false : true}
              >
                <option>ស្រី</option>
                <option>ប្រុស</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-6 right-content">
            <Form.Group>
              <Form.Label className="right-label-style">អុីមែល</Form.Label>
              <Form.Control
                style={{
                  fontFamily:
                    '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                }}
                type="text"
                placeholder="example@gmail.com"
                value={this.state.email}
                className="rounded-pill right-textbox"
                readOnly={this.state.IS_UPDATE ? false : true}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="right-label-style">
                ថ្ងៃ ខែ​ ឆ្នាំកំណើត
              </Form.Label>
              <br />
              <DatePicker
                style={{
                  fontFamily:
                    '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                }}
                className="rounded-pill profile-dob-style"
                name="dob"
                selected={this.state.dob}
                onChange={this.dateOnChange}
                placeholderText="ថ្ងៃ ខែ​ ឆ្នាំកំណើត"
                dateFormat="dd/MMM/yyyy"
                showYearDropdown
                readOnly={this.state.IS_UPDATE ? false : true}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-md-12 my-table">
            <MyTable header={header} content={this.state.content} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //*************************** */
    data: state.playerHistoriesReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getPlayerHistories,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
