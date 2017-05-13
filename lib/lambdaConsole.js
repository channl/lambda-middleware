import _regeneratorRuntime from '/Users/tmitchel2/Channl/lambda-middleware/node_modules/babel-runtime/regenerator';

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const lambdaConsole = (() => {
  var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(ctx, next) {
    var start, result, ms;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          start = new Date();

          console.log(`Started ${ctx.context.functionName}`);
          _context.next = 5;
          return next();

        case 5:
          result = _context.sent;
          ms = new Date() - start;

          console.log(`Completed ${ctx.context.functionName} - ${ms}ms`);
          return _context.abrupt('return', result);

        case 11:
          _context.prev = 11;
          _context.t0 = _context['catch'](0);

          console.error(_context.t0);

        case 14:
        case 'end':
          return _context.stop();
      }
    }, _callee, _this, [[0, 11]]);
  }));

  return function lambdaConsole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();


export default lambdaConsole;