export default (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end(); // code for Method Not Allowed
    return;
  } else {
    console.log('Post request recieved');
  }
};
