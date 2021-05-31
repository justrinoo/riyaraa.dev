import React, { Component } from "react";

export default class Navigation extends Component {
	render() {
		return (
			<>
				{/* Start Navigation */}
				<nav className="navbar navbar-expand-md navbar-light navbar-bg-light">
					<div className="container">
						<a href="#" className="navbar-brand text-white fw-bold">
							RINO SATYA PUTRA
						</a>
						<div className="navbar-nav">
							<a href="#" className="nav-link text-white fw-bold mx-3 text-nav">
								Home
							</a>
							<a href="#" className="nav-link text-white fw-bold mx-3 text-nav">
								About
							</a>
							<a href="#" className="nav-link text-white fw-bold mx-3 text-nav">
								Skills
							</a>
							<a href="#" className="nav-link text-white fw-bold mx-3 text-nav">
								Portfolio
							</a>
						</div>
					</div>
				</nav>
			</>
		);
	}
}
