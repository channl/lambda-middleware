import createLambdaCallbackPromise from 'lambda-dev-utils/createLambdaCallbackPromise';
import LambdaMiddleware from '../src/LambdaMiddleware';
import lambdaConsole from '../src/lambdaConsole';

// $FlowIgnore
it('Single middleware works', async () => {

  // Init middleware
  const app = new LambdaMiddleware();
  // app.use(lambdaConsole);
  app.use(async ctx => {
    return { message: 'Hello World'};
  });

  // Init request params
  const event = {};
  const context = {
    getRemainingTimeInMillis: () => { return 0; },
    awsRequestId: '012345',
    callbackWaitsForEmptyEventLoop: false,
    clientContext: {},
    functionName: 'MyTestFunction',
    functionVersion: '1.0.0',
    identity: null,
    invokedFunctionArn: 'ARN012345',
    logGroupName: 'MyTestFunctionLogGroup',
    logStreamName: 'MyTestFunctionLogStream',
    memoryLimitInMB: 125,
  };
  const { callback, promise } = createLambdaCallbackPromise();

  // Invoke
  app.handler(event, context, callback);
  const result = await promise;

  // $FlowIgnore
  expect(result).toEqual({ message: 'Hello World'});
});

it('Multiple middlewares work', async () => {

  // Init middleware
  const app = new LambdaMiddleware();
  app.use(lambdaConsole);
  app.use(async ctx => {
    return { message: 'Hello World'};
  });

  // Init request params
  const event = {};
  const context = {
    getRemainingTimeInMillis: () => { return 0; },
    awsRequestId: '012345',
    callbackWaitsForEmptyEventLoop: false,
    clientContext: {},
    functionName: 'MyTestFunction',
    functionVersion: '1.0.0',
    identity: null,
    invokedFunctionArn: 'ARN012345',
    logGroupName: 'MyTestFunctionLogGroup',
    logStreamName: 'MyTestFunctionLogStream',
    memoryLimitInMB: 125,
  };
  const { callback, promise } = createLambdaCallbackPromise();

  // Invoke
  app.handler(event, context, callback);
  const result = await promise;

  // $FlowIgnore
  expect(result).toEqual({ message: 'Hello World'});
});

it('Middlewares with error works', async () => {

  // Init middleware
  const app = new LambdaMiddleware();
  app.use(async ctx => {
    throw new Error('Something bad happened');
  });

  // Init request params
  const event = {};
  const context = {
    getRemainingTimeInMillis: () => { return 0; },
    awsRequestId: '012345',
    callbackWaitsForEmptyEventLoop: false,
    clientContext: {},
    functionName: 'MyTestFunction',
    functionVersion: '1.0.0',
    identity: null,
    invokedFunctionArn: 'ARN012345',
    logGroupName: 'MyTestFunctionLogGroup',
    logStreamName: 'MyTestFunctionLogStream',
    memoryLimitInMB: 125,
  };
  const { callback, promise } = createLambdaCallbackPromise();

  // Invoke
  app.handler(event, context, callback);
  // await expect(promise).rejects.toEqual(new Error('Something bad happened'));

  try {
    await promise;
  } catch (err) {
    // $FlowIgnore
    expect(err).toEqual(new Error('Something bad happened'));
  }
});
