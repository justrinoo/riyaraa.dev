import React, { useState } from "react";
import Profile from "../../assets/images/profile.png";
import Rotate from "react-reveal/Rotate";
import Navigation from "../Header/Navigation";
export default function Body(props) {
	console.log(props);
	const name = useState("Hi There, im Rino Satya Putra👋");
	const description = useState(
		"Im is a fresh graduate of Frontend Interested Junior Web Developer, I always learn new things about technology especially on websites, I am also disciplined to be able to work individually and in a team and have a high desire  to learn new things. and now I'm in the midst of my career to become a software engineer."
	);

	return (
		<>
			<Navigation />
			<section className="container" id="about">
				<div className="row">
					<div className="col-md-10 mx-auto mt-3 justify-content-center">
						<div className="card text-center h-100">
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
								<h3 className="mt-4 fw-bold text-me">{name}</h3>
								<p className="text-md-center mt-3 text-story fw-normal">
									{description}
								</p>
								<h5 className="mt-3 fw-bold">{props.findMe}</h5>
								<div className="d-flex justify-content-center icons">
									<Rotate>
										<a href="https://github.com/riyaraa">
											<img
												src={props.images.github}
												className="img-fluid mx-3 mt-3 image-icons"
												width={38}
												alt="Github Icon"
											/>
										</a>
									</Rotate>
									<Rotate>
										<a href="https://t.me/riyaraa">
											<img
												src={props.images.telegram}
												className="img-fluid mx-3 mt-3 image-icons"
												width={38}
												alt="Telegram Icon"
											/>
										</a>
									</Rotate>
									<Rotate>
										<a href="https://instagram.com/rinoosp">
											<img
												src={props.images.instagram}
												className="img-fluid mx-3 mt-3 image-icons"
												width={38}
												alt="Instagram Icon"
											/>
										</a>
									</Rotate>
									<Rotate>
										<a href="https://twitter.com/riyaraaa">
											<img
												src={props.images.twitter}
												className="img-fluid mx-3 mt-3 image-icons"
												width={38}
												alt="Twitter Icon"
											/>
										</a>
									</Rotate>
									<Rotate>
										<a href="https://www.linkedin.com/in/rino-satya-putra-940539173">
											<img
												src={props.images.linkedin}
												className="img-fluid mx-3 mt-3 image-icons"
												width={38}
												alt="Linkedin Icon"
											/>
										</a>
									</Rotate>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
