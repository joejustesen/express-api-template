const example = require('./example.js').default;

// bug in jest ??, cannot get import to work for now, was working....using require instead.
// import exampleGet from './example';

describe('/example api conformance tests', () => {
  it('/example should return bird data', async () => {
    const data = await example();
    expect(data).toMatchSnapshot({ when: expect.any(String) });
  });
});
