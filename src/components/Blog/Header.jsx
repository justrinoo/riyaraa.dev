import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<nav className="navbar navbar-expand-md">
				<div className="container">
					<h4 className="navbar-brand text-white fw-bold d-none d-md-block">
						Made by{" "}
						<Link to="/" className="text-decoration-none text-white">
							riyaraa
						</Link>
					</h4>
					<div className="navbar-nav ">
						<div className="d-none d-md-flex">
							<Link
								onClick="/categories"
								className="nav-link text-white fw-bold mx-3 "
							>
								Categories
							</Link>
							<Link to="/journey" className="nav-link text-white fw-bold mx-3 ">
								Journey
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
