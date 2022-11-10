import React from 'react';

function Signup() {
  return (
		<div className="hide" id='login-main-div'>
      <h1>Sign Up</h1>
			<form id='signup-form'>
				<input name='firstname' type='text' placeholder='Firstname' />
				<input name='lastname' type='text' placeholder='Lastname' />
				<input name='email' type='text' placeholder='Email' />
				<input name='password' type='password' placeholder='Password' />
				<input name='password' type='password' placeholder='Confirm Password' />

				<button type='submit'>Create Account</button>
			</form>
		</div>
	);
}

export default Signup;
