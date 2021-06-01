import React, { Component } from "react";

export default class Portfolio extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col">
							<h2 className="mt-5 fw-bold ">Portfolio</h2>
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
									<p className="card-text">
										{this.props.descPortfolioSekolahku}
									</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">React Js</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">Tailwind Css</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Axios</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/sekolahku"
												className="text-decoration-none text-white"
											>
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
												<p className="mt-2 mx-3 fw-bold">Soon</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.SobatQuran}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">
										{this.props.descPortfolioSobatQuran}
									</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">React Js</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">Bootstrap</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Axios</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/sobatquraan"
												className="text-decoration-none text-white"
											>
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
											<a
												href="http://sobatquraan.kagumijakarta.sch.id"
												className="text-decoration-none text-white"
											>
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
												<p className="mt-2 fw-bold">Visit Web</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.GramediaLite}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">
										{this.props.descPortfolioGramediaLite}
									</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">Php</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">Bootstrap</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Js DOM</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/Gramedia-Lite"
												className="text-decoration-none text-white"
											>
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
											<a
												href="http://gramedia-lite.epizy.com/views/"
												className="text-decoration-none text-white"
											>
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
												<p className="mt-2 fw-bold">Visit Web</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.NewsBlog}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">
										{this.props.descPortfolioNewsBlog}
									</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">React Js</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">TailwindCss</h6>
										</div>

										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">ExpressJs</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/news-blog"
												className="text-decoration-none text-white"
											>
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
											<a href="#" className="text-decoration-none text-white">
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
												<p className="mt-2 mx-3 fw-bold">Soon</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.StayCation}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">
										{this.props.descPortfolioStayCation}
									</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">Express Js</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">Mongodb</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Bootstrap</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/serverStaycation"
												className="text-decoration-none text-white"
											>
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
											<a href="#" className="text-decoration-none text-white">
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
												<p className="mt-2 mx-3 fw-bold">Soon</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.BlibliClone}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">
										{this.props.descPortfolioBlibliClone}
									</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">React Js</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">Bootstrap</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Express Js</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/blibliapp_team3"
												className="text-decoration-none text-white"
											>
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
											<a href="#" className="text-decoration-none text-white">
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
												<p className="mt-2 mx-3 fw-bold">Soon</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.MyCv}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">{this.props.descPortfolioMyCv}</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">HTML</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">CSS</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Javascript</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/MyCv"
												className="text-decoration-none text-white"
											>
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
											<a
												href="https://clever-clarke-7840a6.netlify.com"
												className="text-decoration-none text-white"
											>
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
												<p className="mt-2 fw-bold">Visit Web</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.Gesjan}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">{this.props.descPortfolioGesjan}</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">React Js</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">Bootstrap</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Express Js</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa"
												className="text-decoration-none text-white"
											>
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
											<a
												href="https://gesjan.netlify.app"
												className="text-decoration-none text-white"
											>
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
												<p className="mt-2 fw-bold">Visit Web</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div
								className="card mx-5 mt-4"
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={this.props.images.RaportLearning}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<p className="card-text">
										{this.props.descPortfolioRaportLearning}
									</p>
									<div className="d-flex">
										<div className="badge bg-primary">
											<h6 className="mt-1">React Js</h6>
										</div>
										<div className="badge bg-primary mx-2">
											<h6 className="mt-1">Bootstrap</h6>
										</div>
										<div className="badge bg-primary mx-1">
											<h6 className="mt-1">Express Js</h6>
										</div>
									</div>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa"
												className="text-decoration-none text-white"
											>
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
											<a
												href="https://gesjan.netlify.app"
												className="text-decoration-none text-white"
											>
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
												<p className="mt-2 mx-3 fw-bold">Soon</p>
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
