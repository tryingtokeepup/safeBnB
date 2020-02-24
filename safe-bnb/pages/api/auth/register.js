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
    const currentUser = await User.create({ email, password });

    res.end(JSON.stringify({ status: 'success', message: 'User added' }));
  } catch (error) {
    res.statusCode = 500;
    let message = 'Oops, an error has occured.';
    // if the error is the Unique Constraint error, change the message to "User already exists."
    if (error.name === 'SequelizeUniqueConstraintError') {
      message = 'Whoops, that user already exists.';
    }
    res.end(JSON.stringify({ status: 'error', message }));
  }
};
