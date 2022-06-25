const mongoose=require('mongoose');
const mongoURI='mongodb://localhost:27017/inotebook?directConnection=true';

const connect=()=>{

    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo DB");
    });
}
 

module.exports= connect;