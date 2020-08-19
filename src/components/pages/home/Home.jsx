import React, { Component } from "react";
import MyCarousel from "./MyCarousel";
import MyCard from "./MyCard";
import MyTable from "./table/MyTable";
import Axios from "axios";
import { topPlayersURL } from "../../../config/API";
import { bindActionCreators } from "redux";
import { getTopPlayers } from "../../../redux/actions/topPlayersAction/topPlayersAction";
import { connect } from "react-redux";

const header = [
  "លរ",
  "ឈ្មោះ",
  "ល្បឿន​ (ពាក្យ / នាទី)",
  "សុក្រឹតភាព",
  "កាលបរិច្ឆេទ",
];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
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
    console.log("TOP PLAYERS DATA: ", this.props.data.data);
    if(this.state.content.length == 0){
      if (this.props.data.length !== 0) {
        this.setState({
          content: this.props.data.data,
        });
      }
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
