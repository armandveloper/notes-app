import React from 'react';
import Grid from '../components/layout/Grid';
import '../auth.css';
import { Link } from 'react-router-dom';

function LoginPage() {
	return (
		<div className="auth__page">
			<div className="auth__form-wrapper">
				<form
					action="/signin"
					method="POST"
					className="auth__form"
					autoComplete="off"
				>
					<h1 className="text-center">Welcome Back</h1>
					<div className="mb-3">
						<label className="form-label" htmlFor="email">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							required
						/>
					</div>
					<Grid>
						<button
							type="submit"
							className="btn btn--primary mt-2 col--12"
						>
							Sign In
						</button>
					</Grid>
					<p className="auth__bottom-text">
						Don't have an account?
						<Link to="/signup">Create one for free</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default LoginPage;
