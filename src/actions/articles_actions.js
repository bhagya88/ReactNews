export const ADD_NOTE = 'ADD_NOTE';
export const SET_ARTICLES = 'SET_ARTICLES';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';

export function setArticles(articles){
	console.log("action: SET_ARTICLES");
	console.log(articles);
	return {
		type : SET_ARTICLES,
		articles
	}
}

export function addNote(articleId,text){

	return {
		type : ADD_NOTE,
		text,
		id: articleId

	}

}


export function deleteNote(articleId,noteIndex){

	return {
		type : DELETE_NOTE,
		id: articleId,
		i: noteIndex

	}

}

export function deleteAllNotes(articleId){

	return {
		type : DELETE_ALL_NOTES,
		id: articleId

	}

}

export function getArticles(){
console.log("from getArticles");
 return despatch =>{
		fetch('/articles')
		.then(res=>res.json())
		.then(data=>despatch(setArticles(data)));
	
	}
}

export function delNote(articleId,noteIndex){

	return despatch =>{

		fetch('/notes/'+articleId+ '/'+ noteIndex +'?_method=DELETE', { method: "POST" } )
	
		.then(data=>despatch(deleteNote(articleId,noteIndex)));
		
	}

}

export function delAllNotes(articleId){

	return despatch =>{

		fetch('/notes/'+articleId+'?_method=DELETE', { method: "POST" } )
	
		.then(data=>despatch(deleteAllNotes(articleId)));
		
	}

}

export function addNewNote(articleId,text){



	return despatch =>{

		
		console.log(articleId,text)

		fetch('/articles/'+articleId, 
		{   
		  method: "POST",
		  body: JSON.stringify({text}),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
	
		.then(data=>despatch(addNote(articleId, text)));
		
	}

}