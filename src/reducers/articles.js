import { ADD_NOTE, SET_ARTICLES, DELETE_NOTE, DELETE_ALL_NOTES } from '../actions/action';
export default function articles(state=[] , action={}){
	switch(action.type){

		case ADD_NOTE :
			return state;
		case SET_ARTICLES:
			return state;
		case DELETE_NOTE:
			return state;
		case DELETE_ALL_NOTES:
			return state;
		default:
		return state;
	}

}

