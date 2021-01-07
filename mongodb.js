// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017' //localHost;
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length)
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

//command to start the mongodb server: 
// /c/Users/Avinash/mongodb/bin/mongod.exe --dbpath=/c/Users/Avinash/mongodb-data

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('error in connection' + error)
    }
    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 34
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        completed: true 
    }).then((result) => {
        console.log(result.deletedCount);
    }).catch((error) => {
        console.log(error)
    })
})

// db.collection('users').insertOne({
    //     name: 'Chitti',
    //     age: '7',
    //     _id: id
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('error while inserting data' + error);
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Avinash1',
    //         age: 34
    //     },
    //     {
    //         name: 'Hema',
    //         age: 31
    //     }
    // ],(error, result) => {
    //     if (error){
    //         return console.log('Error with insert Many' + error)
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task1',
    //         completed: false
    //     },
    //     {
    //         description: 'Task2',
    //         completed: false
    //     },
    //     {
    //         description: 'Task3',
    //         completed: true
    //     }
    // ],(error, result) => {
    //     if (error) {
    //         return console.log('error in inserting new records' + error);
    //     }

    //     console.log(result.ops);
    // })
        // db.collection('users').findOne({
    //     _id: new ObjectID("5ff22e7860cc0c16303c4fbe")
    // }, (error, user) => {
    //     if (error){
    //         return console.log('unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({name: 'Avinash'}).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({name: 'Avinash'}).count((error, count) => {
    //     console.log(count);
    // });

    // db.collection('tasks').findOne({
    //     _id: new ObjectID("5ff231af20c6c00f38ffaf6e")
    // },(error,task) => {
    //     console.log(task);
    // });

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks);
    // })

        // db.collection('users').updateOne({
    //     _id: new ObjectID("5ff22cd6ee360f3b94f617ff")
    // },{
    //     $inc:{
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount);
    // }).catch((error) => {
    //     console.log(error);
    // })
