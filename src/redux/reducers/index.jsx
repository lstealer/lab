import {combineReducers} from 'redux';
import { contentReducer } from './contentReducer/contentReducer';
import { topPlayersReducer } from './topPlayersReducer/topPlayersReducer';
import { playerHistoriesReducer } from './playerHistoriesReducer/playerHistoriesReducer';
import { allContentsReducer } from './allContentsReducer/allContentsReducer';


const reducers = {
    //******************** */
    contentReducer: contentReducer,
    topPlayersReducer: topPlayersReducer,
    playerHistoriesReducer: playerHistoriesReducer,
    allContentsReducer: allContentsReducer,
}
export const rootReducer = combineReducers(reducers);