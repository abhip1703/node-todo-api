const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (e, hash) =>{
    console.log(hash);
  } );
});

var hashedPass = '$2a$10$JDE6dUGN2x8/P5bvOm4MqOZTcfOCfEffnn9w4zLJPLE5RqYsyalFe';

bcrypt.compare(password, hashedPass, (e, res) => {
  if (res) {
    console.log(res);
  } else {
    console.log(e);
  }
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
// var verify = jwt.verify(token, '123abc');
// console.log('Decoded: ', verify);

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
