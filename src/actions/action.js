export const ADD_NOTE = 'ADD_NOTE';
export const SET_ARTICLES = 'SET_ARTICLES';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';

export function setArticles(articles){

	return {
		type : SET_ARTICLES,
		articles
	}
}

export function addNote(text,articleId){

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

export function fetchArticles(){

}

export function postArticle(){

}

export function delNote(){

}

export function delAllNotes(){

}