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

 db.collection('Users').findOneAndDelete({_id: ObjectID('5b2cafd4a374430682cf0e22')}).then((res) => {
   console.log(res);
 });


  // db.close();
});
