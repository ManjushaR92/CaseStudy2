require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://usertwo:usertwo@manjufiles.feq2g.mongodb.net/MYFILES?retryWrites=true&w=majority");

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata; 