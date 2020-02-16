import { useState } from 'react';

export default props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordconfirmation] = useState('');
  return (
    <>
      <h2>Sign Up</h2>
      <div>
        <form
          onSubmit={event => {
            alert('Successful signup! Here is the email: ', email);
            console.log(email, password, passwordconfirmation);
            event.preventDefault();
          }}
        >
          <input
            id="email"
            type="email"
            placeholder="Email address"
            onChange={event => setEmail(event.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
          <input
            id="passwordconfirmation"
            type="password"
            placeholder="Please confirm password!"
            onChange={event => setPasswordconfirmation(event.target.value)}
          />
          <button>Sign up! :D</button>
          <p>
            Oops, already have an account?{' '}
            <a href="#" onClick={() => props.showLogin()}>
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
