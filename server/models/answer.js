const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let AnswerSchema = new mongoose.Schema({
	answer: {type:String, required:[true, "You have to have a answer"]},
	detail: {type:String},
	
	writer: {type:String, required:[true, "You have to have a writer"]},
	_question:{type:Schema.Types.ObjectId, ref: 'Question'},

	
}, {timestamps:true});



mongoose.model('Answer', AnswerSchema);