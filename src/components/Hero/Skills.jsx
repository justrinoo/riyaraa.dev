import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
export default class Skills extends Component {
	// handleInform = () => {
	// 	let tester = document.querySelector(".tester");
	// 	if (tester.style.display === "block") {
	// 		tester.style.display === "none";
	// 		return true;
	// 	} else {
	// 		tester.style.display === "block";
	// 		return false;
	// 	}
	// };
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
		this.handleInform = this.handleInform.bind(this);
	}

	handleInform() {
		this.setState({
			show: !this.state.show,
		});
	}

	render() {
		return (
			<>
				<div className="container" id="skills">
					<div className="row">
						<div className="col">
							<div className="d-flex position-relative">
								<h4 className="mt-5">{this.props.textKnowladge}</h4>
								<button
									className="btn btn-outline-light btn-sm h-25 mt-5 mx-2"
									onClick={this.handleInform}
								>
									<span className="fw-bold">!</span>
								</button>
								{this.state.show ? (
									<div className="bg-dark text-light p-2 position-absolute bottom-50 end-50">
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
									src={this.props.stack.Html}
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
									src={this.props.stack.Css}
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
									src={this.props.stack.Javascript}
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
									src={this.props.stack.Bootstrap}
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
									src={this.props.stack.Php}
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
									src={this.props.stack.Nodejs}
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
									src={this.props.stack.ReactIcon}
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
									src={this.props.stack.Expressjs}
									width={100}
									className="mt-4 img-fluid"
									alt="Html Icon"
								/>
								<br />
								<p className="fs-3 badge bg-light mt-2 text-center text-dark">
									Express Js
								</p>
							</div>
						</Zoom>
						<Zoom delay={1800}>
							<div className="col-6 col-md-3">
								<img
									src={this.props.stack.Git}
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
									src={this.props.stack.Github}
									width={100}
									className="mt-4 img-fluid"
									alt="Html Icon"
								/>
								<br />
								<p className="fs-3 badge bg-dark mt-2 text-center text-light">
									Github
								</p>
							</div>
						</Zoom>
						<Zoom delay={2200}>
							<div className="col-6 col-md-3">
								<img
									src={this.props.stack.Mysql}
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
									src={this.props.stack.Figma}
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

					<h4 className="mt-5">{this.props.textLearn}</h4>
					<hr
						style={{ width: "37%", height: "3px", margin: "2px" }}
						className=""
					/>
					<div className="row ">
						<Zoom delay={200}>
							<div className="col-6 col-md-3">
								<img
									src={this.props.stack.Typescript}
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
									src={this.props.stack.Vue}
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
									src={this.props.stack.Redux}
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
									src={this.props.stack.Golang}
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
}
