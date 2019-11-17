"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

//const mongoose=require('mongoose');
//const  Schema=mongoose.Schema; //OBTENER ESCHEMA
// const TaskSchema=new Schema({
//     apodo:{type:String,required:true},
//     msj:{type:String,required:true}
// });
var TaskSchema = new _mongoose.Schema({
  apodo: {
    type: String,
    required: true
  },
  msj: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  }
});
/*
MONGOOSE  SIEMPRE POR DEFECTO ACEPTA COLECCIONES PLURALES  
    ADD {COLLECTION:"USER"}
const TaskSchema=new Schema({
    apodo:{type:String,required:true},
    msj:{type:String,required:true}
},{collection:"chat"});

*/

/*CREAR  SCHEMA*/

/*EXPORTAR MODELO*/
// const  {Schema}=mongoose;
// const  TaskSchema=new Schema({
//     title:{type:String,required:true},
//     description:{type:String,required:true}
// });
// PRODUCTOS ES LA COLLECTION Y TASKSCHEMA ES LA FORMA  O ESTRUCTURA QUE TIENE TU COLLECTION 

var _default = _mongoose["default"].model("chats", TaskSchema);

exports["default"] = _default;
//# sourceMappingURL=global.js.map