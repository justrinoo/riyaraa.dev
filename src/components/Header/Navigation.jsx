import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
	render() {
		return (
			<>
				{/* Start Navigation */}
				<nav className="navbar navbar-expand-md fixed-top">
					<div className="container">
						<h4 className="text-saya navbar-brand text-white fw-bold d-block d-md-block position-relative">
							RINO SATYA PUTRA
						</h4>
						<div className="navbar-nav ">
							<div className="d-none d-md-flex">
								<Link
									onClick={() => window.location.replace("#app")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									Beranda
								</Link>
								<Link
									onClick={() => window.location.replace("#about")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									About
								</Link>
								<Link
									onClick={() => window.location.replace("#skills")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									Skills
								</Link>
								<Link
									onClick={() => window.location.replace("#portfolio")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									Portfolio
								</Link>
								<Link
									onClick={() => window.location.replace("#talk")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									Lets Talk
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</>
		);
	}
}
