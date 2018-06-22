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

// db.collection('Todos').find({
//     _id: new ObjectID('5b2cb1af097584016ee9042c')
//   }).toArray().then((docs) => {
//     console.log('Todos: ');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });

db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });


  // db.close();
});
