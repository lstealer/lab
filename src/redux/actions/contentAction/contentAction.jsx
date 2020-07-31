import { baseURL } from "../../../config/API";
import Axios from 'axios';
import { GET_CONTENT } from "./contentActionType";

export const getContents = () => {
    const innerGetContents = async(dispatch) => {
        const result = await Axios.get(`${baseURL}`);
        //*********************** */
        console.log('#GET ALL CONTENTS: ', result.data);

        dispatch({
            type: GET_CONTENT,
            data: result.data,
        })
    }
    return innerGetContents
}

