export default async function exampleGet(req, res) {
  const data = {
    bird: 'robin',
    gender: 'female',
    when: Date.now,
  };

  res.send(data);
}
