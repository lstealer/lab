import { topPlayersURL } from "../../../config/API";
import Axios from 'axios';
import { GET_TOPPLAYERS } from "./topPlayersActionType";

export const getTopPlayers = () => {
    const innerGetTopPlayers = async(dispatch) => {
        try {
            const result = await Axios.get(`${topPlayersURL}`);
            //*********************** */
            console.log('#GET TOPPLAYERS: ', result.data);
    
            dispatch({
                type: GET_TOPPLAYERS,
                data: result.data,
            })
        } catch (error) {
            console.log(error)
        }
     
    }
    return innerGetTopPlayers
}

