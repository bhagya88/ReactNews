import { ADD_NOTE, SET_ARTICLES, DELETE_NOTE, DELETE_ALL_NOTES } from '../actions/articles_actions';
export default function articles(state=[] , action={}){

	var newState;

	switch(action.type){

		case ADD_NOTE :

		    newState = state.map(function(article){

		    	var newArticle = Object.assign({},article);

		    	if(newArticle._id === action.id){
		    	
		    		newArticle.notes = article.notes.concat(action.text);
		    	}

		    	return newArticle;
		    });




		   console.log("from add new note");
		   console.log(newState[0]);

		   console.log("from add new note");
		   console.log(action);


			return newState;

		case SET_ARTICLES:
			console.log(action.articles);
			return action.articles;
		case DELETE_NOTE:

		    newState = state.map(function(article){

		    	var newArticle = Object.assign({},article);
		    	if(newArticle._id === action.id){
		    		newArticle.notes = [...article.notes.slice(0,action.i),...article.notes.splice(action.i+1)];
		    	}

		    	return newArticle;
		    });

			return newState;

		
		case DELETE_ALL_NOTES:

		    newState = state.map(function(article){

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

