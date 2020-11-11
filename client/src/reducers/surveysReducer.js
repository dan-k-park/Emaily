import { FETCH_SURVEYS } from '../actions/types';

// default to empty array for surveys
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}