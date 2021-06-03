import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
	render() {
		return (
			<>
				{/* Start Navigation Top */}
				<nav className="navbar navbar-expand-md sticky-top">
					<div className="container">
						<h4 className="text-saya navbar-brand text-white fw-bold d-none d-md-block">
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
				{/* End Navigation Top */}

				{/* Start Bottom Navigation */}
				<nav className="navbar navbar-expand-md navbar-dark bg-nav-mobile fixed-bottom d-flex d-md-none">
					<div className="container">
						<div className="navbar-nav mx-auto">
							<div className="d-flex d-md-none">
								<Link
									onClick={() => window.location.replace("#app")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										width={35}
										fill="currentColor"
									>
										<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
									</svg>
									<small className="d-block">Home</small>
								</Link>
								<Link
									onClick={() => window.location.replace("#about")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										width={35}
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
											clipRule="evenodd"
										/>
									</svg>
									<small className="d-block">About</small>
								</Link>
								<Link
									onClick={() => window.location.replace("#skills")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										width={35}
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
									</svg>
									<small className="d-block">Skills</small>
								</Link>

								<Link
									onClick={() => window.location.replace("#portfolio")}
									className="nav-link text-white fw-bold mx-3 text-nav"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										width={35}
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									<small className="d-block">Projects</small>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</>
		);
	}
}
