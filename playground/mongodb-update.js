// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Abhishek', age: 21};
// var {name} = user;
// console.log(name);

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return  console.log('Unable to connect to server');
  }
  console.log('Connected to MongoDB server');

db.collection('Users').findOneAndUpdate({
  _id:  ObjectID('5b2ca5f51cb91305b005853f')
}, {
    $set: {
      name: 'Abhishek'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }
).then((result) => {
  console.log(result);
});


  // db.close();
});
