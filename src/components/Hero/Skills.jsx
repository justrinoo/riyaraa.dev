import React, { useState, useContext } from "react";
import Zoom from "react-reveal/Zoom";
import AppContext from "../../context/AppContext";
import Navigation from "../Header/Navigation";
import CustomTheme from "../Theme/customTheme";

const { ThemeContext } = AppContext;
export default function Skills(props) {
	const ThemeProps = useContext(ThemeContext);
	const [show, setShow] = useState(false);

	const handleInform = () => {
		setShow(!show);
	};

	return (
		<>
			<Navigation />
			<CustomTheme />
			<div className="container" style={{ marginBottom: "70px" }} id="skills">
				<div className="row">
					<div className="col">
						<div className="d-flex position-relative">
							<h4
								className={`mt-5 ${
									ThemeProps.theme === "light"
										? "text-dark fw-bold"
										: "text-white"
								}`}
							>
								{props.textKnowladge}
							</h4>
							<button
								className={`btn btn-outline-${
									ThemeProps.theme === "light" ? "dark" : "light"
								} btn-sm h-25 mt-5 mx-2`}
								onClick={handleInform}
							>
								<span className="fw-bold">!</span>
							</button>
							{show ? (
								<div
									className={`${
										ThemeProps.theme === "light" && "bg-stack "
									}  p-2 position-aboslute top-50 start-0`}
								>
									<span>
										<span className="fw-bold">Information!</span>

										<p>Stack Frontend:</p>
										<ul>
											<li>Html</li>
											<li>Css</li>
											<li>Javascript</li>
											<li>Bootstrap</li>
											<li>React Js</li>
										</ul>
										<span>Stack Backend:</span>
										<ul>
											<li>Php</li>
											<li>Node Js</li>
											<li>Express Js</li>
										</ul>
										<span>Database:</span>
										<ul>
											<li>Mysql</li>
											<li>Mongodb</li>
										</ul>
										<span>Tools:</span>
										<ul>
											<li>Visual Studio Code</li>
											<li>Git</li>
										</ul>
										<span>Design:</span>
										<ul>
											<li>Figma</li>
										</ul>
									</span>
								</div>
							) : null}
						</div>
						<hr
							style={{
								width: "45%",
								height: "4%",
								margin: "2px",
							}}
						/>
					</div>
				</div>

				<div className="row justify-content-center">
					<Zoom delay={200}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Html}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-warning mt-2 text-center text-dark">
								HTML
							</p>
						</div>
					</Zoom>
					<Zoom delay={400}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Css}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-primary mt-2 text-center text-light">
								Css
							</p>
						</div>
					</Zoom>
					<Zoom delay={600}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Javascript}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-warning mt-2 text-center text-dark">
								Javascript
							</p>
						</div>
					</Zoom>
					<Zoom delay={800}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Bootstrap}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-primary mt-2 text-center text-light">
								Bootstrap
							</p>
						</div>
					</Zoom>
					<Zoom delay={100}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Php}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-info mt-2 text-center text-light">
								Php
							</p>
						</div>
					</Zoom>
					<Zoom delay={1200}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Nodejs}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-success mt-2 text-center text-light">
								NodeJs
							</p>
						</div>
					</Zoom>
					<Zoom delay={1400}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.ReactIcon}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-primary mt-2 text-center text-light">
								React Js
							</p>
						</div>
					</Zoom>
					<Zoom delay={1600}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Expressjs}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p
								className={`fs-3 badge mt-2 text-center ${
									ThemeProps.theme === "light"
										? "bg-stack text-light"
										: "bg-light text-dark"
								}`}
							>
								Express Js
							</p>
						</div>
					</Zoom>
					<Zoom delay={1800}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Git}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-danger mt-2 text-center text-light">
								Git
							</p>
						</div>
					</Zoom>
					<Zoom delay={2000}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Github}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p
								className={`fs-3 badge  mt-2 text-center ${
									ThemeProps.theme === "light"
										? "bg-stack text-light"
										: "bg-light text-dark"
								}`}
							>
								Github
							</p>
						</div>
					</Zoom>
					<Zoom delay={2200}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Mysql}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-info mt-2 text-center text-light">
								Mysql
							</p>
						</div>
					</Zoom>
					<Zoom delay={2400}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Figma}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-danger mt-2 text-center text-light">
								Figma
							</p>
						</div>
					</Zoom>
				</div>

				<h4
					className={`${
						ThemeProps.theme === "light" ? "text-dark fw-bold" : "text-white"
					} mt-5`}
				>
					{props.textLearn}
				</h4>
				<hr
					style={{ width: "37%", height: "3px", margin: "2px" }}
					className=""
				/>
				<div className="row ">
					<Zoom delay={200}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Typescript}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-info mt-2 text-center text-light">
								Typescript
							</p>
						</div>
					</Zoom>
					<Zoom delay={400}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Vue}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-success mt-2 text-center text-light">
								Vue Js
							</p>
						</div>
					</Zoom>
					<Zoom delay={600}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Redux}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-primary mt-2 text-center text-light">
								Redux
							</p>
						</div>
					</Zoom>
					<Zoom delay={800}>
						<div className="col-6 col-md-3">
							<img
								src={props.stack.Golang}
								width={100}
								className="mt-4 img-fluid"
								alt="Html Icon"
							/>
							<br />
							<p className="fs-3 badge bg-info mt-2 text-center text-light">
								Golang
							</p>
						</div>
					</Zoom>
				</div>
			</div>
		</>
	);
}
