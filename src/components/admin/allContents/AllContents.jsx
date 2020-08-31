import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./AllContents.css";
import MyTable from "./table/MyTable";
import Axios from "axios";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllContents } from "../../../redux/actions/allContentsAction/allContentsAction";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
 

const header = ["លេខសម្គាល់", "អត្ថបទ", "មុខងារ"];

class AllContents extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      activePage: 15,
    };
  }

  componentWillMount() {
    this.props.getAllContents();
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    try {
      if (this.state.content.length == 0) {
        if (this.props.data.data.length !== 0) {
          console.log("ALL ADMIN CONTENTS: ", this.props.data.data);
          this.setState({
            content: this.props.data.data,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
    return (
      <div
        className="container"
        style={{
          // display: this.props.item == "contents" ? "" : "none",
          color: "#000000",
        }}
      >
        <div className="row mt-3">
          <div className="col-md-6 allcontent-title">
            <h3>អត្ថបទ</h3>
          </div>
          <div className="col-md-6 allcontent-btn-add">
            ​
            <Link to="/admin/contents/add">
              <Button
                className="rounded-pill button-add"
                variant="primary"
                type="button"
              >
                បន្ថែម
              </Button>
            </Link>
          </div>
        </div>
        <div className="row ml-5 mr-5 mt-0 pt-0">
          <div className="col-md-12 table-allcontents">
            <MyTable header={header} content={this.state.content} />
            {/* <BootstrapTable 
              keyField="id"
              data={this.state.content}
              columns={header}
              pagination={paginationFactory()}
            /> */}
          </div>
        </div>
        <div className="row pagination-row">
          <div className="col-md-12 pagination-style">
            {/* <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Next />
              <Pagination.Last />
            </Pagination> */}
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)}
              itemClass="page-item"
              linkClass="page-link"
              firstPageText="First"
              lastPageText="Last"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //*************************** */
    data: state.allContentsReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllContents,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllContents);
