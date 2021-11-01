import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

const Registration = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [flag, setFlag] = useState(false);
	const [login, setLogin] = useState(true);

	// on form submit...
	function handleFormSubmit(e) {
		e.preventDefault();

		if (!name || !email || !password) {
			setFlag(true);
		} else {
			setFlag(false);
			localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
			localStorage.setItem(
				"hardikSubmissionPassword",
				JSON.stringify(password)
			);
			console.log("Saved in Local Storage");

			setLogin(!login);
		}
	}

	// Directly to the login page
	function handleClick() {
		setLogin(!login);
	}

	return (
		<>
			<div>
				{" "}
				{login ? (
					<form className="mx-5" onSubmit={handleFormSubmit}>
						<h3>Register</h3>

						<div className="form-group">
							<label>Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter Full Name"
								name="name"
								onChange={(event) => setName(event.target.value)}
							/>
						</div>

						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								onChange={(event) => setEmail(event.target.value)}
							/>
						</div>

						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								placeholder="Enter password"
								onChange={(event) => setPassword(event.target.value)}
							/>
						</div>

						<button
							type="submit"
							className="my-3 btn btn-dark btn-lg btn-block"
						>
							Register
						</button>
						<p className="forgot-password text-right">
							Already registered{" "}
							<NavLink to="/" onClick={handleClick}>
								log in?
							</NavLink>
						</p>
						{flag && alert("Please fill validated credentials")}
					</form>
				) : (
					<Login />
				)}
			</div>
		</>
	);
};

export default Registration;
