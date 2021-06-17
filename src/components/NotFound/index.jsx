import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<>
			<div className="container">
				<div className="row ">
					<div className="col">
						<h1 className="text-center" style={{ marginTop: "250px" }}>
							Not Found =_=
						</h1>
						<div className="text-center">
							Go To
							<Link
								to="/"
								className="text-decoration-none mx-1 fw-bold text-white"
							>
								Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
