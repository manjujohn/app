var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
	firstname : {type: String, required: true},
	lastname : {type: String, required: true}
})

module.exports=mongoose.model("user",userSchema)