export default async function exampleGet() {
  const data = {
    bird: 'robin',
    gender: 'female',
    when: new Date().toISOString(),
  };

  return data;
}
