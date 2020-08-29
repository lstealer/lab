import { allContentsURL } from "../../../config/API";
import Axios from 'axios';
import { GET_ALLCONTENTS } from "./allContentsActionType";

export const getAllContents = () => {
    const innerGetAllContents = async(dispatch) => {
        const result = await Axios.get(`${allContentsURL}`);
        //*********************** */
        console.log('#GET ALLCONTENTS IN ADMIN: ', result.data);

        dispatch({
            type: GET_ALLCONTENTS,
            data: result.data,
        })
    }
    return innerGetAllContents
}

