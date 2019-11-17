"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = require("../configuration/config");

//const cadena="mongodb+srv://gouser2:1234@cluster0-bzauq.mongodb.net/ChatExample01?retryWrites=true&w=majority&authSource=admin";
_mongoose["default"].connect(_config.cadena, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(function (bd) {
  console.log('db is connected');
})["catch"](function (err) {
  console.log('error  ubicado : ' + err);
});

var _default = _mongoose["default"];
exports["default"] = _default;
//# sourceMappingURL=conexion.js.map