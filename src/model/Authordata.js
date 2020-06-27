// to access mongoose package
const mongoose= require ('mongoose');

// to connect database
mongoose.connect('mongodb://localhost:27017/library');
// Schema definition
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    name:String,
    website:String,
    description:String,
    image:String
});

// model creation
var Authordata=mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;