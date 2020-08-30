import React, { Component } from "react";
import MyCarousel from "./MyCarousel";
import MyCard from "./MyCard";
import MyTable from "./table/MyTable";
import Axios from "axios";
import { topPlayersURL } from "../../../config/API";
import { bindActionCreators } from "redux";
import { getTopPlayers } from "../../../redux/actions/topPlayersAction/topPlayersAction";
import { connect } from "react-redux";
import Loading from "../../loading/Loading";
// import { css } from "@emotion/core";
// import PuffLoader from "react-spinners/PuffLoader";

const header = [
  "លរ",
  "ឈ្មោះ",
  "ល្បឿន​ (ពាក្យ / នាទី)",
  "សុក្រឹតភាព",
  "កាលបរិច្ឆេទ",
];

// const override = css`
//   display: block;
//   margin: 25px auto;
//   border-color: red;
// `;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
      loading: true,
    };
  }
  componentWillMount() {
    this.props.getTopPlayers();
    // console.log("TOP PLAYERS DATA: ", this.props.data.data);
    // if (this.props.data.length !== 0) {
    //   this.setState({
    //     content: this.props.data.data,
    //   });
    // }

    // await Axios.get(topPlayersURL)
    //   .then(result=>{

    //     this.setState({
    //       content: result.data.data,
    //     })
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    //   console.log("result; ",this.state.content)
  }

  render() {
    try {
      console.log("TOP PLAYERS DATA: ", this.props.data.data);
      if (this.state.content.length == 0) {
        if (this.props.data.length !== 0) {
          this.setState({
            content: this.props.data.data,
          },()=>{
            this.setState({
              loading: false,
            })
          });
        }
      }
    } catch (error) {
      console.log(error);
    }

    return (
      <div>
        <MyCarousel />
        <div className="title-background">
          <h3>ការណែនាំ</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MyCard />
        </div>
        <div className="title-background">
          <h3>កំពូលតារាងទាំង ១០</h3>
        </div>
        <div style={{ margin: "-50px 100px 0" }}>
          <MyTable header={header} content={this.state.content} />
          <Loading loading={this.state.loading}/>
          {/* <div className="sweet-loading">
            <PuffLoader
              css={override}
              size={50}
              color={"#00c6ff"}
              loading={this.state.loading}
            />
          </div> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    //*************************** */
    data: state.topPlayersReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTopPlayers,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
