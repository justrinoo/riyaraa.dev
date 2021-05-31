import React, { Component } from "react";
import GithubIcon from "../../assets/images/icons/github.svg";
import InstagramIcon from "../../assets/images/icons/instagram.svg";
import TelegramIcon from "../../assets/images/icons/telegram.svg";
import TwitterIcon from "../../assets/images/icons/twitter.svg";
import LinkedinIcon from "../../assets/images/icons/linkedin.svg";
export default class Footer extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col mt-4">
							<div className="text-center">
								<h3 className="text-footer-first mt-5 fw-bold">
									Interested in working together?
								</h3>
								<h3 className="text-footer-first fw-bold">Send me email!</h3>
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
								rinosatyaputra.id@gmail.com
							</a>
						</div>
					</div>
					<div className="row">
						<div className="d-flex justify-content-center mt-3 mb-3">
							<a href="#">
								<img
									src={GithubIcon}
									className="img-fluid mx-3 mt-3"
									width={38}
									alt="Github Icon"
								/>
							</a>
							<a href="#">
								<img
									src={TelegramIcon}
									className="img-fluid mx-3 mt-3"
									width={38}
									alt="Telegram Icon"
								/>
							</a>
							<a href="#">
								<img
									src={InstagramIcon}
									className="img-fluid mx-3 mt-3"
									width={38}
									alt="Instagram Icon"
								/>
							</a>
							<a href="#">
								<img
									src={TwitterIcon}
									className="img-fluid mx-3 mt-3"
									width={38}
									alt="Twitter Icon"
								/>
							</a>
							<a href="#">
								<img
									src={LinkedinIcon}
									className="img-fluid mx-3 mt-3"
									width={38}
									alt="Linkedin Icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</>
		);
	}
}
