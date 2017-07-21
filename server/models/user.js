const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
	name: {type:String, required:[true, "You have to have a name"]},
	email: {type:String, required:[true, "You have to have a email"]},
	age: {type:Number},
	pw: {type:String, required:[true, "You have to have a password"]},
	cpw: {type:String, required:[true, "You have to have a confirmation password"]}
}, {timestamps:true});


UserSchema.pre('save',  function(next) {
    if(this.pw != this.cpw){
        // This line will create an error message that matches the format of our other error messages
        this.invalidate('pw', "Password and Password Confirmation must match");
        // In order for our pre-save method to fail we must pass an err into next()
        let err = new Error("Password and password confirmation do not match");
        next(err);
    }else{
        // remove password_confirmation so we're not storing it
        this.cpw = '';
        this.pw = bcrypt.hashSync(this.pw, bcrypt.genSaltSync(8));
        next();
    }
})




mongoose.model('User', UserSchema);