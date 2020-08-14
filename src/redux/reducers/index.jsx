import {combineReducers} from 'redux';
import { contentReducer } from './contentReducer/contentReducer';
import { topPlayersReducer } from './topPlayersReducer/topPlayersReducer';


const reducers = {
    //******************** */
    contentReducer: contentReducer,
    topPlayersReducer: topPlayersReducer,
}
export const rootReducer = combineReducers(reducers);