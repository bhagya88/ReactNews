import { combineReducers } from 'redux';
import articles from './articles';
import current from './current';

export default combineReducers({
	articles,
	current
});