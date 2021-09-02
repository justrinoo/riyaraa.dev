import React, { useState, useContext } from "react";
import Profile from "../../assets/images/profile.png";
import CustomTheme from "../Theme/customTheme";
import Navigation from "../Header/Navigation";
import AppContext from "../../context/AppContext";

const { ThemeContext } = AppContext;

export default function Body(props) {
	// console.log(props.theme);
	const ThemeProps = useContext(ThemeContext);
	// console.log(ThemeProps);
	const name = useState("Hi, I am Rino Satya Putra👋");
	const description = useState(
		"Im is a fresh graduate of Frontend Interested Junior Web Developer, I always learn new things about technology especially on websites, I am also disciplined to be able to work individually and in a team and have a high desire  to learn new things. and now I'm in the midst of my career to become a software engineer."
	);

	return (
		<>
			<Navigation />
			<CustomTheme />
			<section className="container" id="about" style={{ height: "91vh" }}>
				<div className="row">
					<div className="col-md-9 mx-auto mt-3 justify-content-center">
						<div
							className={`card ${
								ThemeProps.theme === "light" ? "bg-light" : `card-dark`
							} text-center h-100`}
						>
							<div className="card-body">
								<img
									alt="My Face :D"
									src={Profile}
									style={{
										width: "180px",
										height: "170px",
									}}
									className="my-profile card-img-top img-fluid"
								/>
								<h3
									className={`mt-4 fw-bold text-me ${
										ThemeProps.theme === "light" ? "text-dark" : "text-light"
									}`}
								>
									{name}
								</h3>
								<p
									className={`text-md-center mt-3 ${
										ThemeProps.theme === "light"
											? "fw-light text-dark"
											: "text-light"
									} fw-normal`}
								>
									{description}
								</p>
								<h5 className="mt-3 fw-bold">{props.findMe}</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
