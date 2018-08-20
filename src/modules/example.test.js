const example = require('./example.js');

// bug in jest ??, cannot get import to work for now, was working....using require instead.
// import exampleGet from './example';

describe('/datastore api conformance tests', () => {
  it('post /datastore should create a resource and return its id', async () => {
    const data = { test: 100 };
    const id = await example.addData(data);
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(1);
  });

  it('get /datastore/:id should return the data', async () => {
    const data = { test: 100 };
    const id = await example.addData(data);

    const result = await example.getData(id);
    expect(result).toBe(data);
  });

  it('get /datastore/:id with invalid id should return undefined', async () => {
    const data = { test: 100 };
    const id = await example.addData(data);

    const result = await example.getData(`${id}badid`);
    expect(result).toBeUndefined();
  });
});
