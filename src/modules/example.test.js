import example from './example';

describe('/example api conformance tests', () => {
  it('/example should return bird data', async () => {
    const data = await example();
    expect(data).toMatchSnapshot({ when: expect.any(String) });
  });
});
