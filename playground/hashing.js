const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
var verify = jwt.verify(token, '123abc');
console.log('Decoded: ', verify);

// var message = 'yo man';
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}.`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   hash:SHA256(JSON.stringify(data) + 'some secret').toString(),
//   data
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'some ').toString();
//
// if (resultHash === token.hash) {
//   console.log('Data same');
// }else {
//   console.log('Data changed');
// }