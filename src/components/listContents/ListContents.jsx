import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getContents} from '../../redux/actions/contentAction/contentAction';

const ListContents = (props) => {
  props.getContent();
  console.log(" GET CONTENTS: ", props.getContent());
  console.log(" GET DATA: ", props.data); 
  return (
    <div className="ListContentWrapper">
      Test content
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
