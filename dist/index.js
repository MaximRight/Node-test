"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const message = 'nodeJS is cool!'
// console.log(message);
var express = require('express');

var validator = require('validator');

var greeter = require('./greeter');

greeter('Hello, friends!');

var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));
console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));
var app = express();
app.get('/', function (req, res) {
  res.send({
    message: 'NodeJS is amazing!'
  });
});
app.listen(3000, function () {
  return console.log('app is running on port 3000 ');
}); // проверяем бабел

var User = /*#__PURE__*/function () {
  function User(name) {
    _classCallCheck(this, User);

    _defineProperty(this, "static", 'hello');

    this._name = name;
  }

  _createClass(User, [{
    key: "name",
    get: function get() {
      return this.name;
    }
  }]);

  return User;
}();

var mango = new User('Mango');
console.log(mango.name);