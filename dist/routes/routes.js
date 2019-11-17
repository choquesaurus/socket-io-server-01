"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _express = require("express");

var _global = _interopRequireDefault(require("../model/global"));

var rutas = (0, _express.Router)(); //const Task=require('../model/global');

rutas.get("/", function (req, res, next) {
  res.send({
    message: "Status correcto"
  });
});
rutas.get("/viewmessages", function _callee(req, resp, next) {
  var data;
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator["default"].awrap(_global["default"].find());

        case 2:
          data = _context.sent;
          _context.next = 5;
          return _regenerator["default"].awrap(resp.json(data));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // rutas.post("/guardar",async(req,res,next)=>{
//     const {apodo,msj}=req.body;
//     const newchat=await new Task(req.body);
//     newchat.save(); 
//     res.json({message:"Se agrego correctamente"});
// });

module.exports = rutas;
//# sourceMappingURL=routes.js.map