//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
       return  console.log('Unable to COnnect to MongoDB  server');
    }
    console.log('Connected to MongoDB server');
  
    const db = client.db('TodoApp');
  

    //Todo's Collection

    // deteleMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //       console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
  

    //Users Collection

    // deteleMany 
    db.collection('Users').deleteMany({name: "Addoh Jean"}).then((result) => {
      console.log(result);
    });

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({_id: new ObjectID('5aec8db76749062b210403ce')}).then((result) => {
    //     console.log(result);
    // });

   // client.close();
});