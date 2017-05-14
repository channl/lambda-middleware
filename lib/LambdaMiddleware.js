import _regeneratorRuntime from '/Users/tmitchel2/Channl/lambda-middleware/node_modules/babel-runtime/regenerator';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

let LambdaMiddleware = class LambdaMiddleware {

  constructor() {
    var _this = this;

    this._pipeline = [];
    this._handler = (() => {
      var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(ctx) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', null);

            case 1:
            case 'end':
              return _context.stop();
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })();
  }

  use(middleware) {
    this._pipeline.push(middleware);
  }

  getHandler() {
    var _this2 = this;

    return (() => {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(event, context, callback) {
        var ctx, handler, result;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              ctx = {
                event,
                context,
                callback
              };
              handler = _this2._getHandler(0);
              _context2.next = 5;
              return handler(ctx);

            case 5:
              result = _context2.sent;

              callback(null, result);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);

              callback(_context2.t0);

            case 12:
            case 'end':
              return _context2.stop();
          }
        }, _callee2, _this2, [[0, 9]]);
      }));

      return function (_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    })();
  }

  _getHandler(index) {
    var _this3 = this;

    let thisMiddleware = this._pipeline[index];
    if (index < this._pipeline.length - 1) {
      let innerHandler = this._getHandler(index + 1);
      let thisHandler = (() => {
        var _ref3 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee4(ctx) {
          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return thisMiddleware(ctx, _asyncToGenerator(_regeneratorRuntime.mark(function _callee3() {
                  return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return innerHandler(ctx);

                      case 2:
                        return _context3.abrupt('return', _context3.sent);

                      case 3:
                      case 'end':
                        return _context3.stop();
                    }
                  }, _callee3, _this3);
                })));

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }, _callee4, _this3);
        }));

        return function thisHandler(_x5) {
          return _ref3.apply(this, arguments);
        };
      })();
      return thisHandler;
    }

    let thisHandler = (() => {
      var _ref5 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee6(ctx) {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return thisMiddleware(ctx, _asyncToGenerator(_regeneratorRuntime.mark(function _callee5() {
                return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt('return', null);

                    case 1:
                    case 'end':
                      return _context5.stop();
                  }
                }, _callee5, _this3);
              })));

            case 2:
              return _context6.abrupt('return', _context6.sent);

            case 3:
            case 'end':
              return _context6.stop();
          }
        }, _callee6, _this3);
      }));

      return function thisHandler(_x6) {
        return _ref5.apply(this, arguments);
      };
    })();
    return thisHandler;
  }
};


export default LambdaMiddleware;