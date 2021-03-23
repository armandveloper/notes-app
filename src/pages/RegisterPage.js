import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../auth.css';
import { AuthContext } from '../auth/AuthContext';
import { useForm } from '../hooks/useForm';
import Grid from '../components/layout/Grid';

function RegisterPage() {
	const { signup } = useContext(AuthContext);

	const [form, handleFormChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = form;

	const handleSignup = async (e) => {
		e.preventDefault();

		if (!email.trim() || !password.trim()) {
			return;
		}

		const { success, msg } = await signup(email, password);
		if (!success) {
			alert(msg);
			// return Swal.fire(
			// 	'Error',
			// 	msg || 'Error al crear cuenta. Por favor intente más tarde',
			// 	'error'
			// );
		}
	};

	return (
		<div className="auth__page">
			<div className="auth__form-wrapper">
				<form
					action="/signup"
					method="POST"
					className="auth__form"
					autoComplete="off"
					onSubmit={handleSignup}
				>
					<h1 className="text-center">Sign Up</h1>
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
							value={email}
							onChange={handleFormChange}
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
							value={password}
							onChange={handleFormChange}
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
						Already have an account?
						<Link to="/signin"> Sign in</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

export default RegisterPage;
