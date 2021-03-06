import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import auth from './authReducer';
import searchJobsReducer from './Search/searchJobsReducer';
import searchJobDetailsReducer from './Search/searchJobDetailsReducer';
import savedSearchedJobsReducer from './Search/savedSearchedJobsReducer';
import jobDetailsAdditionalReducer from './jobDetailsAdditionalReducer';
import activityLogReducer from './activityLogReducer';

const allReducers = combineReducers({
  dashboardLoad: dashboardReducer,
  jobDetailsAdditional: jobDetailsAdditionalReducer,
  searchJobDetails: searchJobDetailsReducer,
  searchResults: searchJobsReducer,
  savedSearchedJobs: savedSearchedJobsReducer,
  activityLogData: activityLogReducer,
  auth
});


export default allReducers;