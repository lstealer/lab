import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getContents} from '../../redux/actions/contentAction/contentAction';

const ListContents = (props) => {
  props.getContents();
  return (
    <div className="ListContentWrapper">
      Test Contest
    </div>
    );
};

const mapStateToProps = (state) => {
  return {
    //*************************** */
    data: state.contentReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getContents,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContents);
