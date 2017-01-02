import { ADD_NOTE, SET_ARTICLES, DELETE_NOTE, DELETE_ALL_NOTES } from '../actions/articles_actions';
export default function articles(state=[] , action={}){
	switch(action.type){

		case ADD_NOTE :
			return state;
		case SET_ARTICLES:
			console.log(action.articles);
			return action.articles;
		case DELETE_NOTE:
			return state;
		case DELETE_ALL_NOTES:
			return state;
		default:
			return state;
	}

}

