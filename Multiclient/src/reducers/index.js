import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import merchantsReducer from './merchantsReducer';
/**
 * Author: Shakamuri Sushma
 */
export default combineReducers({
   errors:errorReducer,
   merchants:merchantsReducer
});