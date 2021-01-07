const express = require('express');
const userRouter = require('../src/routers/users');
const taskRouter = require('../src/routers/tasks');

// connect to a given mongo db.
require('./db/mongoose');
// load in express functions...
const app = express();
const port = process.env.PORT

// convert the request body from JSON format to be used in object format. 
app.use(express.json());

/*
multer examples... 
*/

// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000              // in bytes  - 1mb
//     },
//     fileFilter(req, file, cb) {
//         // cb(new Error('file must be a PDF')); send error message to uploader
//         // cb(undefined,true);  file is accepted
//         // cb(undefined,false); file is not accepted, but with no error message

//         // if(!file.originalname.endsWith('.pdf')){
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word Document')); 
//         }

//         cb(undefined, true);
//     }
// });

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send({
//         error: error.message
//     });
// })



//register the user router and allow this to be picked up
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server started at port number ${port}`)
});

// const  pet =   {
//     name: 'Hey'
// };

// pet.toJSON = function() {
//     console.log(this);
//     return {};
// }

// console.log(JSON.stringify(pet));

const Task = require('./models/task');
const User = require('./models/user');
const main = async () =>{
    // const task = await Task.findById('5ff5b543d9cc9a2750f9e3d5');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);
    const user = await User.findById('5ff5b106d3d0970d2cfa7712');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}
// main();

