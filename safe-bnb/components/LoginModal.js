export default props => (
  // add in a fragment here
  <>
    <h2>Log in here!</h2>
    <div>
      <form
        onSubmit={event => {
          alert('Successful Login!');
          event.preventDefault();
        }}
      >
        <input id="email" type="email" placeholder="Email Address" />

        <input id="password" type="password" placeholder="Password" />
        <button>Log in. :)</button>
        <p>
          No account? No problem!{' '}
          <a href="javascript:;" onClick={() => props.showSignup()}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  </>
);
