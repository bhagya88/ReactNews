var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema for the articles collection
var ArticleSchema = new Schema({
	title:{
		type: String
	} ,
	content:{
		type: String
	},

	link:{
		type:String
		
	} ,
	notes:[{
		type: String

	}]
});


var Article = mongoose.model('Article',ArticleSchema);

module.exports = Article;