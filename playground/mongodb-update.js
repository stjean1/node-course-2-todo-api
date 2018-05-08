//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
       return  console.log('Unable to COnnect to MongoDB  server');
    }
    console.log('Connected to MongoDB server');
  
    const db = client.db('TodoApp');
  

    //$set
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5aec9b69d95a050b05e831b7')

    // }, {
    //     $set : {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //       console.log(result);
    // });

    //$inc

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5af18f35c8195c0b3e2ab8ce')
    }, {
        $inc: {
              age: 1
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    })

    
   // client.close();
});