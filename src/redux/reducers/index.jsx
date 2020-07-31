import {combineReducers} from 'redux';
import { contentReducer } from './contentReducer/contentReducer';


const reducers = {
    //******************** */
    contentReducer: contentReducer,
}
export const rootReducer = combineReducers(reducers);