import React from "react";

const Home = () => {
	return (
		<div className="hero">
			<div className="card bg-dark text-white border-0">
				<img
					src="/assets/bg.jpg"
					className="card-img"
					alt="background"
					height="400px"
				/>
				<div className="card-img-overlay">
					<div className="container">
						<h5 className="card-title display-3 fw-bolder mb-0">
							Diwali Season Arrived
						</h5>
						<p className="card-text lead fs-2">Check out all the trends.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
