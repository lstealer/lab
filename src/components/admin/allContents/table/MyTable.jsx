import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "./MyTable.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from 'sweetalert2';

let tableHeader = null;
let tableRow = null;
export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header,
      myContent: [],
    };
  }

  onView(e) {
    console.log("rowID: ", e.target.name);
    localStorage.setItem(
      "contentStore",
      JSON.stringify({
        id: this.state.myContent[e.target.name].id,
        title: this.state.myContent[e.target.name].title,
        author: this.state.myContent[e.target.name].author,
        image: this.state.myContent[e.target.name].image,
        khContent: this.state.myContent[e.target.name].khContent,
        description: this.state.myContent[e.target.name].description,
      })
    );
  }

  onDelete(e){
    
    let myID = this.state.myContent[e.target.name].id;
    console.log("IIIInedex: ",myID)
    this.setState(this.state.myContent.splice(e.target.name, 1))
    Axios.delete(`/kh-racer/v1/content/${myID}`).then(result=>{
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "ជោគជ័យ",
        text: "លោកអ្នកលុបទិន្នន័យ បានសម្រេច!",
      })
    }).catch(error=>{
      console.log(error);
    })
  }

  render() {
    try {
      // if (this.state.myContent.length == 0) {
        this.state.myContent = this.props.content;
        console.log("content: ", this.state.myContent);
        tableHeader = this.state.header.map((value, index) => (
          <th key={index} className="table-header-color">
            {value}
          </th>
        ));

        tableRow = this.state.myContent.map((obj, j) => {
          const items = Object.values(obj); // convert object to array
          return (
            <tr key={j}>
              {items.map((item, k) => {
                if (k == 0 || k == 1) {
                  return (
                    <td
                      key={k}
                      className="row-bg-color"
                      style={{ textAlign: k == 0 ? "center" : "" }}
                    >
                      <span>{item}</span>
                    </td>
                  );
                }
              })}
              <td style={{ width: "24%" }}>
                <Link to="/admin/contents/view">
                  <Button
                    variant="primary"
                    name={j}
                    onClick={this.onView.bind(this)}
                  >
                    មើល
                  </Button>
                </Link>{" "}
                <Link to="/admin/contents/update">
                  <Button
                    variant="warning"
                    name={j}
                    onClick={this.onView.bind(this)}
                  >
                    កែប្រែ
                  </Button>
                </Link>{" "}
                {/* <Button variant="danger" name={j} onClick={this.onDelete.bind(this)}>លុប</Button>{" "} */}
              </td>
            </tr>
          );
        });
    // }
    } catch (error) {
      console.log(error);
    }

    return (
      <div className="row m-0">
        <div className="col-md-12 my-table">
          <Table striped bordered hover size="sm" className="table-style">
            <thead>
              <tr className="table-header-bg">{tableHeader}</tr>
            </thead>
            <tbody>{tableRow}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
