const mongoose = require('mongoose');

const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose.connect('mongodb+srv://user:12345qwert@cluster0.gyae4vf.mongodb.net/meanStack?retryWrites=true&w=majority', connectionParams,(err)=>{
    if(!err){
        console.log('Database Connection successful...');
    }
    else{
        console.log('error in connection - ',err);
    }
})

module.exports = mongoose;