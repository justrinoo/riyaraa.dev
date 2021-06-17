import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
	const isState = useState(false);
	const history = props.history;
	const name = localStorage.getItem("firstName");
	const role = localStorage.getItem("role");
	function handlerLogout() {
		localStorage.removeItem("email");
		localStorage.removeItem("firstName");
		localStorage.removeItem("token");
		localStorage.removeItem("role");
		alert(`Arigataooo ${name}`);
		history.push("/blog");
	}

	return (
		<>
			<nav className="navbar navbar-expand-md">
				<div className="container">
					<h4 className="navbar-brand text-white fw-bold ">
						Made by{" "}
						<Link to="/" className="text-decoration-none text-white">
							riyaraa
							<Link
								to="/private/login"
								className="text-decoration-none text-white"
							>
								<span className="text-loged">.</span>
							</Link>
						</Link>
					</h4>
					<div className="navbar-nav ">
						<div className="d-flex">
							<Link
								onClick="/categories"
								className="nav-link text-white fw-bold mx-3 "
							>
								{isState ? "Categories" : ""}
							</Link>
							<Link to="/journey" className="nav-link text-white fw-bold mx-3 ">
								{isState ? "Journey" : ""}
							</Link>
							<Link
								to="/blog/create/new"
								className="nav-link text-white fw-bold mx-3 "
							>
								{role === "captain" ? "Create Post" : ""}
							</Link>
							<Link
								onClick={handlerLogout}
								className="nav-link text-white fw-bold mx-3"
							>
								{role === "captain" ? "Logout" : ""}
							</Link>
							<span className="nav-link text-white fw-bold mx-3">
								{role === "captain" ? name : ""}
							</span>
							{/* <Link to="/logout" className="btn btn-info fw-bold">
								Logout
							</Link> */}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
