import { ADD_NOTE, SET_ARTICLES, DELETE_NOTE, DELETE_ALL_NOTES } from '../actions/articles_actions';
export default function articles(state=[] , action={}){
	switch(action.type){

		case ADD_NOTE :
			return state;
		case SET_ARTICLES:
			console.log(action.articles);
			return action.articles;
		case DELETE_NOTE:

		    var nextState = state.map(function(article){

		    	var newArticle = Object.assign({},article);
		    	if(newArticle._id === action.id){
		    		newArticle.notes = [...article.notes.slice(0,action.i),...article.notes.splice(action.i+1)];
		    	}

		    	return newArticle;
		    });

			return nextState;

		
		case DELETE_ALL_NOTES:

		    var newState = state.map(function(article){

		    	var newArticle = Object.assign({},article);
		    	if(newArticle._id === action.id){
		    		newArticle.notes = [];
		    	}

		    	return newArticle;
		    });
			return newState;
		default:
			return state;
	}

}

