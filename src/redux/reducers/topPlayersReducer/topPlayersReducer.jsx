import { GET_TOPPLAYERS } from "../../actions/topPlayersAction/topPlayersActionType";

const defaultState = {
  //******************** */
  data: [],
};

export const topPlayersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TOPPLAYERS:
      return {
        ...state,
        //********************* */
        data: action.data,
      };
    default:
      return state;
  }
};
