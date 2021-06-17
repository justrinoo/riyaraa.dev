import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<h3 className="text-center" style={{ marginTop: "250px" }}>
							This page is still under construction
						</h3>
						<h4 className="text-center">
							<span className="fw-bold">Coming Soon!</span> get information when
							launched
						</h4>
						<h5 className="text-center">Thank you for attention 👋</h5>
						<Link to="/" className="text-decoration-none">
							<h6 className="text-center mt-5">Home</h6>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
