import { GET_PLAYERHISTORIES } from "../../actions/playerHistoriesAction/playerHistoriesActionType";

const defaultState = {
  //******************** */
  data: [],
};

export const playerHistoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PLAYERHISTORIES:
      return {
        ...state,
        //********************* */
        data: action.data,
      };
    default:
      return state;
  }
};
