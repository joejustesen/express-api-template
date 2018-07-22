export default async function exampleGet(req, res) {
  const data = {
    bird: 'robin',
    gender: 'female',
    when: new Date().toISOString(),
  };

  res.send(data);
}
