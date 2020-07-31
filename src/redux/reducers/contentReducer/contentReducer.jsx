import { GET_CONTENT } from "../../actions/contentAction/contentActionType";

const defaultState = {
  //******************** */
  data: [],
};

export const contentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        //********************* */
        data: action.data,
      };
    default:
      return state;
  }
};
