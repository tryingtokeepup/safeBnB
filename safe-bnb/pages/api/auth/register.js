export default (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end(); // code for Method Not Allowed
    return;
  }
  console.log(req.body);
  res.status(200).send('Great scots, that worked!');
  res.end();
};
