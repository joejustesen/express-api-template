import short from 'short-uuid';
// import request from 'request';
// import request from 'request-promise-native';

const translator = short();
let dataStore = {};

export async function addData(data) {
  // const auth = await request({
  //   uri: 'https://api.airproducts.com/authenticate',
  //   json: true,
  //   timeout: 1500,
  // });

  const id = translator.new();
  dataStore[id] = data;

  return id;
}

export async function getData(id) {
  // const auth = await request({
  //   uri: 'https://api.airproducts.com/authenticate',
  //   json: true,
  //   timeout: 1500,
  // });
  return dataStore[id];
}


export async function removeData(id) {
  if (id in dataStore === false) {
    return false;
  }

  delete dataStore[id];
  return true;
}


export function reset() {
  dataStore = {};
}
