import React, { Component } from "react";

export default class Portfolio extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col">
							<h3 className="mt-5 fw-bold mx-5">Portfolio</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.Sekolahku}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">{this.props.descPortfolio}</p>
									<div className="d-flex justify-content-around align-items-center">
										<div>
											<a href="" className="text-decoration-none text-white">
												<img
													src={this.props.images.IconGithub}
													width={40}
													className="img-fluid mx-2"
													alt="Icon GIthub"
												/>
												<p className="mt-2 mr-2 fw-bold">Github</p>
											</a>
										</div>
										<div>
											<a href="" className="text-decoration-none text-white">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6 mx-3"
													fill="none"
													viewBox="0 0 24 24"
													width={40}
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
													/>
												</svg>
												<p className="mt-2 mr-2 fw-bold">Visit Web</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
