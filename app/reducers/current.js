import { NEXT_ARTICLE, PREVIOUS_ARTICLE } from '../actions/current_actions';
export default function current(state=0 , action={}){
	switch(action.type){

		case NEXT_ARTICLE:
		 if (action.articles[state+1]){
		 	var newState = state+1
		 	return newState;
		 }else{
		 	return state;
		 }

		case PREVIOUS_ARTICLE:
		 if (action.articles[state-1]){
		 	var previousState = state-1
		 	return previousState;
		 }else{
		 	return state;
		 }

		default:
		return state;
	}

}