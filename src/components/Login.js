import React, { useState } from "react";
//import { Alert } from "react-bootstrap";
import Home from "./Home";
import { useHistory } from "react-router-dom";

const Login = () => {
	const [emaillog, setEmaillog] = useState(" ");
	const [passwordlog, setPasswordlog] = useState(" ");
	let history = useHistory();

	function handleLogin(e) {
		e.preventDefault();
		let pass = localStorage
			.getItem("hardikSubmissionPassword")
			.replace(/"/g, "");
		let mail = localStorage.getItem("hardikSubmissionEmail").replace(/"/g, "");
		// .replace(/"/g,"") is used to remove the double quotes for the string

		if (!emaillog || !passwordlog) {
			return alert("Fill correct credentials");
		} else if (passwordlog == pass || emaillog == mail) {
			localStorage.setItem("auth-token", true);
			history.push("/home");
		} else {
			return alert("Fill correct credentials");
		}
	}

	return (
		<div>
			<form className="mx-5" onSubmit={handleLogin}>
				<h3>LogIn</h3>
				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						onChange={(event) => setEmaillog(event.target.value)}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						onChange={(event) => setPasswordlog(event.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-dark btn-lg btn-block my-3">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
