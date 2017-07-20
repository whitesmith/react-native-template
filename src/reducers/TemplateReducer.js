import {
  TEMPLATE_TYPE
} from '../actions/types';

const INITIAL_STATE = {
  templateField: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEMPLATE_TYPE:
      return { ...state, templateField: action.payload };
    default:
      return state;
  }
};
