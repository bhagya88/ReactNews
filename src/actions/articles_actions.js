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

export function getArticles(){
console.log("from getArticles");
 return despatch =>{
		fetch('/articles')
		.then(res=>res.json())
		.then(data=>despatch(setArticles(data)));
	// var articles =  [
	// {title:"title1",content:"content1",link:"link1",notes:["note11","note12"]},
	// {title:"title2",content:"content2",link:"link2",notes:["note21","note22"]},
	// {title:"title3",content:"content3",link:"link3",notes:["note31","note32"]}
	// ];

	// despatch(setArticles(articles));
	}
}

export function postArticle(){

}

export function delNote(){

}

export function delAllNotes(){

}