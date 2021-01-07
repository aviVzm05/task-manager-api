const mongoose = require('mongoose');
/*
to start mongo db server
/c/Users/Avinash/mongodb/bin/mongod.exe --dbpath=/c/Users/Avinash/mongodb-data
*/


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});