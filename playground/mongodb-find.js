//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
       return  console.log('Unable to COnnect to MongoDB  server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
   
    // db.collection('Todos').find({
    //     _id: new ObjectID('5aec8c814454112a25d673c8')
    // }).toArray().then((docs) => {
    //   console.log("Todo's");
    //   console.log(JSON.stringify(docs,undefined,2))
    // }, (err) => {
    //   console.log("Unable to fetch todos ", err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(` Todo's count: ${count}`);
    //   }, (err) => {
    //     console.log("Unable to fetch todos ", err);
    //   });
    
    db.collection('Users').find({name: 'Addoh Jean'}).toArray().then((docs) => {
      console.log("Users with name Addoh Jean");
      console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
         console.log("Unable to fetch todos ", err);
    });
  
   // client.close();
});