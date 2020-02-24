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

  // we should check if the password and the passwordconfirmation match
  let flag = '';
  if (password !== passwordconfirmation) {
    flag = 'Oh crap, we totally added it.';
    res.end(
      JSON.stringify({
        status: 'error',
        message: 'Oops, double check if the passwords match!'
      })
    );
    // break out
    return;
  }

  try {
    const currentUser = await User.create({ email, password });
    console.log('Did we add the user? => ', flag);

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
