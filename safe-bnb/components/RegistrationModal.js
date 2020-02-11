export default props => (
  <>
    <h2>Sign Up</h2>
    <div>
      <form
        onSubmit={event => {
          alert('Successful signup!');
          event.preventDefault();
        }}
      >
        <input id="email" type="email" placeholder="Email address" />
        <input id="password" type="password" placeholder="Password" />
        <input
          id="passwordconfirmation"
          type="password"
          placeholder="Please confirm password!"
        />
        <button>Sign up! :D</button>
        <p>
          Oops, already have an account?{' '}
          <a href="javascript:;" onClick={() => props.showLogin()}>
            Login
          </a>
        </p>
      </form>
    </div>
  </>
);
