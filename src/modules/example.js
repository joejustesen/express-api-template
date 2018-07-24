// import request from 'request';
import request from 'request-promise-native';

export default async function exampleGetHandler() {
  const auth = await request({
    uri: 'https://api.airproducts.com/authenticate',
    json: true,
    timeout: 1500,
  });


  const data = {
    bird: 'robin',
    gender: 'female',
    when: new Date().toISOString(),
  };

  return data;
}
