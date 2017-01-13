export const NEXT_ARTICLE = 'NEXT_ARTICLE';
export const PREVIOUS_ARTICLE = 'PREVIOUS_ARTICLE';

export function next(articles){
	console.log("action: NEXT_ARTICLE");
	console.log(articles);
	return {
		type : NEXT_ARTICLE,
		articles
	}
}

export function previous(articles){
	console.log("action: SET_ARTICLES");
	console.log(articles);
	return {
		type : PREVIOUS_ARTICLE,
		articles
	}
}