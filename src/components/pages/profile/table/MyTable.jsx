import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./MyTable.css";

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
  render() {
    try {
      let tempContent;
      if (this.state.myContent.length == 0) {
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
              <td>
                <span>{j + 1}</span>
              </td>
              {items.map((item, k) =>{
                if(k!=0){
                  return(
                    <td key={k} className="row-bg-color" style={{textAlign: k==0?"left":""}}>
                      <span>{k==1?`${item} wpm`:k==2?`${item}%`:k==4?`${item.slice(0,10)} ម៉ោង ${item.slice(11,16)}`:item}</span>
                    </td>
                )
                }
              })}
            </tr>
          );
        });
      }
    } catch (error) {console.log(error)}

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
