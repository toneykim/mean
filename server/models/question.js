const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let QuestionSchema = new mongoose.Schema({
	question: {type:String, required:[true, "You have to have a question"]},
	description: {type:String},
	
	writer: {type:String, required:[true, "You have to have a writer"]},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]


}, {timestamps:true});



mongoose.model('Question', QuestionSchema);