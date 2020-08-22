import { playerHistoriesURL } from "../../../config/API";
import Axios from 'axios';
import { GET_PLAYERHISTORIES } from "./playerHistoriesActionType";

export const getPlayerHistories = (id) => {
    const innerGetPlayerHistories = async(dispatch) => {
        const result = await Axios.get(`${playerHistoriesURL}${id}`);
        //*********************** */
        console.log('#GET ALL PLAYERHISTORIES: ', result.data);

        dispatch({
            type: GET_PLAYERHISTORIES,
            data: result.data,
        })
    }
    return innerGetPlayerHistories
}