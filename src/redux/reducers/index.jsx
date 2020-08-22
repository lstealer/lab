import {combineReducers} from 'redux';
import { contentReducer } from './contentReducer/contentReducer';
import { topPlayersReducer } from './topPlayersReducer/topPlayersReducer';
import { playerHistoriesReducer } from './playerHistoriesReducer/playerHistoriesReducer';


const reducers = {
    //******************** */
    contentReducer: contentReducer,
    topPlayersReducer: topPlayersReducer,
    playerHistoriesReducer: playerHistoriesReducer,
}
export const rootReducer = combineReducers(reducers);