const {Schema,model} = require("mongoose");
const { string, email } = require("zod");

const contactSchema = new Schema({
    userName : {type:String,required:true},
    email : {type:String,required:true},
    message : {type:String,required:true},
});

// Create model or a Collection
const Contact = new model("Contact",contactSchema);

module.exports = Contact;