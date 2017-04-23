/* @flow */
import type { MiddlewareContext, MiddlewareNextFunc } from './FlowTypes';

const lambdaConsole = async (ctx: MiddlewareContext, next: MiddlewareNextFunc) => {
  try {
    const start = new Date();
    console.log(`Started ${ctx.context.functionName}`);
    const result = await next();
    const ms = new Date() - start;
    console.log(`Completed ${ctx.context.functionName} - ${ms}ms`);
    return result;
  } catch (e) {
    console.error(e);
  }
};

export default lambdaConsole;
