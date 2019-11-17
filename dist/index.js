"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _conexion = _interopRequireDefault(require("./connect/conexion"));

var _global = _interopRequireDefault(require("./model/global"));

var _routes2 = _interopRequireDefault(require("./routes/routes"));

require("@babel/polyfill");

var Aplicacion =
/*#__PURE__*/
function () {
  function Aplicacion() {
    (0, _classCallCheck2["default"])(this, Aplicacion);
    this.app = (0, _express["default"])();
    this.config();
    this.http = _http["default"].createServer(this.app);
    this.socket = (0, _socket["default"])(this.http);
    this.RunningSocket();
    this.routes();
  }

  (0, _createClass2["default"])(Aplicacion, [{
    key: "routes",
    value: function routes() {
      //desabilita la cache
      this.app.disable('etag');
      this.app.use("/", _routes2["default"]);
    }
  }, {
    key: "config",
    value: function config() {
      //this.app.set('PORT',6549||process.env.PORT);
      this.app.use(_express["default"].json());
      this.app.use(_express["default"].urlencoded({
        extended: false
      }));
      this.app.use((0, _morgan["default"])('dev'));
      this.app.use((0, _cors["default"])());
    }
  }, {
    key: "RunningSocket",
    value: function RunningSocket() {
      this.socket.on('connection', function (socket) {
        // console.log("User conected id : "+socket.id);   
        //socket.emit('gretting',{message:'Hello friend'});
        socket.on('messageGlobal', function _callee(data) {
          var newmeesageglobal;
          return _regenerator["default"].async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regenerator["default"].awrap(new _global["default"](data));

                case 2:
                  newmeesageglobal = _context.sent;
                  _context.next = 5;
                  return _regenerator["default"].awrap(newmeesageglobal.save());

                case 5:
                  socket.broadcast.emit('messageBroadcast', {
                    status: "Running"
                  }); //  console.log(data,newmeesageglobal);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          });
        });
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.http.listen(process.env.PORT || 5000, function () {
        console.log('server is running');
      });
    }
  }]);
  return Aplicacion;
}();

new Aplicacion().start();
//# sourceMappingURL=index.js.map