import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import { isValidElement } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
	render() {
		return (
			<>
				<div className="vh-50">
					<div className="container" id="talk">
						<div className="row">
							<div className="col ">
								<div className="text-center">
									<Zoom delay={200}>
										<h3 className="text-footer-first mt-5 fw-bold">
											{this.props.textFooterFirst}
										</h3>
									</Zoom>
									<Zoom delay={400}>
										<h3 className="text-footer-first fw-bold">
											{this.props.textSendEmail}
										</h3>
									</Zoom>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="d-flex justify-content-center mt-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									width={30}
									fill="currentColor"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
								<a href="" className="text-white fs-5 fw-bold mx-1">
									{this.props.textMyGmail}
								</a>
							</div>
						</div>
						<div className="row">
							<div className="d-flex justify-content-center">
								<Rotate>
									<a href="https://github.com/riyaraa">
										<img
											src={this.props.Icons.github}
											className="img-fluid mx-3 mt-3"
											width={38}
											alt="Github Icon"
										/>
									</a>
								</Rotate>
								<Rotate>
									<a href="https://t.me/riyaraa">
										<img
											src={this.props.Icons.telegram}
											className="img-fluid mx-3 mt-3"
											width={38}
											alt="Telegram Icon"
										/>
									</a>
								</Rotate>
								<Rotate>
									<a href="https://instagram.com/rinoosp">
										<img
											src={this.props.Icons.instagram}
											className="img-fluid mx-3 mt-3"
											width={38}
											alt="Instagram Icon"
										/>
									</a>
								</Rotate>
								<Rotate>
									<a href="https://twitter.com/riyaraaa">
										<img
											src={this.props.Icons.twitter}
											className="img-fluid mx-3 mt-3"
											width={38}
											alt="Twitter Icon"
										/>
									</a>
								</Rotate>
								<Rotate>
									<a href="https://www.linkedin.com/in/rino-satya-putra-940539173">
										<img
											src={this.props.Icons.linkedin}
											className="img-fluid mx-3 mt-3"
											width={38}
											alt="Linkedin Icon"
										/>
									</a>
								</Rotate>
							</div>
						</div>
						<div className="row">
							<h5 className="text-center mt-5">
								Copyright 2021 Rino Satya Putra All Rights Reserved
							</h5>
							<p className="text-center">
								<Link
									to="/blog"
									className="text-decoration-none text-white fw-bold"
								>
									Visit Me Blog
								</Link>
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
