/* @flow */
import type { LambdaContext, LambdaCallbackFunc, MiddlewareFunc, MiddlewareContext } from './FlowTypes';

declare type MiddlewareInterFunc = (ctx: MiddlewareContext) => Promise<?Object>;

class LambdaMiddleware {

  _pipeline: MiddlewareFunc[];
  _handler: MiddlewareInterFunc;

  constructor() {
    this._pipeline = [];
    this._handler = async (ctx: MiddlewareContext) => { return null; };
  }

  use(middleware: MiddlewareFunc) {
    this._pipeline.push(middleware);
  }

  getHandler() {
    return async (event: Object, context: LambdaContext, callback: LambdaCallbackFunc) => {
      try {
        let ctx: MiddlewareContext = {
          event,
          context,
          callback,
        };

        const handler = this._getHandler(0);
        const result = await handler(ctx);
        callback(null, result);
      } catch (e) {
        callback(e);
      }
    };
  }

  _getHandler(index: number): MiddlewareInterFunc {
    let thisMiddleware = this._pipeline[index];
    if (index < this._pipeline.length - 1) {
      let innerHandler = this._getHandler(index + 1);
      let thisHandler = async ctx => {
        return await thisMiddleware(ctx, async () => { return await innerHandler(ctx); } );
      };
      return thisHandler;
    }

    let thisHandler = async ctx => {
      return await thisMiddleware(ctx, async () => { return null; });
    };
    return thisHandler;
  }
}

export default LambdaMiddleware;
