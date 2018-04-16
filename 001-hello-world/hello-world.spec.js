const HelloWorld = require('./hello-world');

describe('Hello World', () => {
  let helloWorld = new HelloWorld();

  it('says hello world', () => {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });
});
