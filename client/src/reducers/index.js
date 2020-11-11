import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// whatever keys being passed into this object represent the keys that exist inside of the state object
// auth piece of state is being manufactured by the authReducer
export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
})