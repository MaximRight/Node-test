// const message = 'nodeJS is cool!'
// console.log(message);
const express = require('express');
const validator = require('validator');
const greeter = require('./greeter');

greeter('Hello, friends!');

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);

const app = express();
app.get('/', function (req, res) {
  res.send({
    message: 'NodeJS is amazing!',
  });
});

app.listen(3000, () => console.log('app is running on port 3000 '));

// проверяем бабел
class User {
  static = 'hello';
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const mango = new User('Mango');
console.log(mango.name);
