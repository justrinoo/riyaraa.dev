import React, { Component } from "react";
import GithubIcon from "../../assets/images/icons/github.svg";
import InstagramIcon from "../../assets/images/icons/instagram.svg";
import TelegramIcon from "../../assets/images/icons/telegram.svg";
import TwitterIcon from "../../assets/images/icons/twitter.svg";
import LinkedinIcon from "../../assets/images/icons/linkedin.svg";
import Profile from "../../assets/images/profile.png";
export default class Body extends Component {
	render() {
		return (
			<>
				<section className="container">
					<div className="row">
						<div className="col-md-10 mx-auto justify-content-center">
							<div className="card mt-5 text-center h-100">
								<div className="card-body">
									<img
										src={Profile}
										alt="My Face :D"
										style={{
											width: "180px",
											height: "170px",
											borderRadius: "100%",
										}}
										className="card-img-top img-fluid"
									/>
									<h4 className="mt-4 fw-bold text-me">
										Hi There, im Rino Satya Putra👋
									</h4>
									<p className="text-md-center mt-3 text-story fw-normal">
										Im is a fresh graduate of Frontend Interested Web Developer,
										I always learn new things about technology especially on
										websites, I am also disciplined to be able to work
										individually and in a team and have a high desire to learn
										to learn new things. and now I'm in the midst of my career
										to become a software engineer.
									</p>
									<h5 className="mt-3 fw-bold">You Can Find Me On</h5>
									<div className="d-flex justify-content-center">
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
						</div>
					</div>
				</section>
			</>
		);
	}
}
