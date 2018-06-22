// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Abhishek', age: 21};
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return  console.log('Unable to connect to server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err, result) => {
//     if (err){
//     return console.log('Unable to insert item');
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
//   name: 'Abhishek',
//   age: '21',
//   location: 'India'
// }, (err, result) => {
//   if (err){
//   return console.log('Unable to insert item');
// }
//
// console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
// });


  db.close();
});
