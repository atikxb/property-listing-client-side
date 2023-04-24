import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import auth from '../../firebase.init';

const Login = () => {
	const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [currentUser] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard';
    currentUser && navigate(from, { replace: true });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="row g-0 app-auth-wrapper align-items-center">
		<div className="col-12 col-md-12 col-lg-6 offset-lg-3 text-center p-5 shadow rounded">
			<div className="d-flex flex align-content-end align-items-center">

				<div className="app-auth-body mx-auto">

					<h2 className="auth-heading text-center mb-5">Log in</h2>
					<div className="auth-form-container text-left">

						<form onSubmit={handleSignIn} className="auth-form login-form" method='post'>
							<div className="email mb-3">
								<label className="sr-only" for="signin-email">Email</label>
								<input onBlur={(e) => setEmail(e.target.value)} id="signin-email" name="signin-email" type="email"
									className="form-control signin-email" placeholder="Email address" required="required"/>
							</div>
							<div className="password mb-3">
								<label className="sr-only" for="signin-password">Password</label>
								<input onBlur={(e) => setPassword(e.target.value)} id="signin-password" name="signin-password" type="password"
									className="form-control signin-password" placeholder="Password" required="required"/>
							</div>
							<div className="text-center">
							{error && <p className='text-danger mt-2'>Email or password is wrong</p>}
								<button type="submit" className="btn btn-primary text-white btn-block theme-btn mx-auto">Log
									In {loading && <Spinner animation="border" size="sm" />}</button>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>


	</div>
    );
};

export default Login;