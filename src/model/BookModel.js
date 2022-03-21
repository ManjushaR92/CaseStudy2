require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.on('open',()=>{
    console.log('Mongoose connection open');
})
.on('error',(err)=>{
    console.log(`Connection error:${err.message}`);
});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;