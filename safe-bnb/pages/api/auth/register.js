import { User } from '../../../model.js';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .send('METHOD NOT ALLOWED!')
      .end(); // code for Method Not Allowed
    return;
  }
  // deconstruct req.body and get email, password, and passwordconfirmation
  const { email, password, passwordconfirmation } = req.body;
  console.log(email);
  console.log(password);
  try {
    const user = await User.create({ email, password });

    res.end(JSON.stringify({ status: 'success', message: 'User added' }));
  } catch (error) {
    res.end(JSON.stringify({ status: 'error', error }));
  }
};
