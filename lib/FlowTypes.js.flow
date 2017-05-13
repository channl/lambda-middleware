/* @flow */
export type LambdaContext = {
  callbackWaitsForEmptyEventLoop: bool;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  memoryLimitInMB: number;
  awsRequestId: string;
  logGroupName: string;
  logStreamName: ?string;
  identity: ?Object;
  clientContext: ?Object;
  getRemainingTimeInMillis(): number;
};

export type LambdaCallbackFunc = (error: ?Error, result: ?Object) => void;

export type MiddlewareContext = {
  event: Object;
  context: LambdaContext;
  callback: LambdaCallbackFunc;
};

export type MiddlewareNextFunc = () => Promise<?Object>;

export type MiddlewareFunc = (ctx: MiddlewareContext, next: MiddlewareNextFunc) => Promise<?Object>;
