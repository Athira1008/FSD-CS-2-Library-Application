// to access mongoose package
const mongoose= require ('mongoose');

// to connect database
mongoose.connect('mongodb://localhost:27017/library');
// Schema definition
const Schema=mongoose.Schema;
const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    image:String,
});

// model creation
var Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;