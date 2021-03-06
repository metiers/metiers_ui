import React from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jobDetails from '../../components/Homepage/Dashboard/JobDetails';
import jobDetailsAction from '../../actions/jobDetailsAdditional';

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    jobDetailsAction: jobDetailsAction,
  }, dispatch);
}

function mapStateToProps (state) {
  return {
    jobDetails: state.searchJobDetails,
    jobDetailsAdditional: state.jobDetailsAdditional,
  }
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(jobDetails));

