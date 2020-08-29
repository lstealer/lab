import { GET_ALLCONTENTS } from "../../actions/allContentsAction/allContentsActionType";

const defaultState = {
  //******************** */
  data: [],
};

export const allContentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALLCONTENTS:
      return {
        ...state,
        //********************* */
        data: action.data,
      };
    default:
      return state;
  }
};
