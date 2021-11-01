import React, { useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import handleCart from "../redux/reducer/handleCart";

const Navbar = ({ authenticated }) => {
	const state = useSelector((state) => state.handleCart);
	//let authenticated = localStorage.getItem("auth-token");
	let history = useHistory();
	const handleLogout = () => {
		localStorage.removeItem("auth-token");
		history.push("/login");
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
				<div className="container">
					<NavLink className="navbar-brand fw-bold fs-4" to="/">
						E-Store
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									className="nav-link active"
									aria-current="page"
									to="/home"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/products">
									Products
								</NavLink>
							</li>
						</ul>
						<div className="buttons">
							{authenticated ? (
								<form className="d-flex">
									<button onClick={handleLogout} className="btn btn-primary">
										Logout
									</button>
									<NavLink
										role="button"
										to="/cart"
										className="btn btn-outline-dark ms-2"
									>
										<i className="fa fa-shopping-cart me-1"></i>
										Cart ({state.length})
									</NavLink>
									{/* <NavLink
										role="button"
										to="/cart"
										className="btn btn-outline-dark ms-2"
									>
										<i className="fa fa-shopping-cart me-1"></i>
										Cart (0)
									</NavLink> */}
								</form>
							) : (
								<form action="" className="d-flex">
									<NavLink
										role="button"
										to="/"
										className="btn btn-outline-dark"
									>
										<i className="fa fa-sign-in me-1"></i>
										Login
									</NavLink>
									<NavLink
										role="button"
										to="/register"
										className="btn btn-outline-dark ms-2"
									>
										<i className="fa fa-user-plus me-1"></i>
										Register
									</NavLink>
								</form>
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
