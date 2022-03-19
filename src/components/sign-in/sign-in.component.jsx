import React from 'react';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }


  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={submitHandler}>
          <input name='email' type='text' value={this.state.email} required />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            required
          />
          <label>Password</label>
          <button type='submit'>Submit Form</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
