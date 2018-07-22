export default async function exampleGetHandler() {
  const data = {
    bird: 'robin',
    gender: 'female',
    when: new Date().toISOString(),
  };

  return data;
}
