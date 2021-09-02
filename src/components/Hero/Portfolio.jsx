import React, { useState, useContext } from "react";
import Bounce from "react-reveal/Bounce";
import AppContext from "../../context/AppContext";
import Navigation from "../Header/Navigation";
import CustomTheme from "../Theme/customTheme";

const { ThemeContext } = AppContext;
export default function Portfolio(props) {
	const ThemeProps = useContext(ThemeContext);
	const [textJudulSekolahku] = useState("Sekolahku");
	const [textJudulSobatQuran] = useState("Sobat Quran");
	const [textJudulGramediaLite] = useState("Gramedia Lite");
	const [textJudulNewsBlog] = useState("News Blog");
	const [textJudulStaycation] = useState("StayCation");
	const [textJudulBlibli] = useState("Blibli Clone");
	const [textJudulCv] = useState("MyCv v-beta");
	const [textJudulGesjan] = useState("Gesjan");
	const [textJudulRaportLearning] = useState("Raport Learning");
	return (
		<>
			<Navigation />
			<CustomTheme />
			<div
				className="container"
				style={{ marginBottom: "80px" }}
				id="portfolio"
			>
				<div className="row">
					<div className="col">
						<h2
							className={`mt-5 fw-bold ${
								ThemeProps.theme === "light" ? "text-dark" : "text-white"
							}`}
						>
							Portfolio
						</h2>
					</div>
				</div>
				<div className="row">
					<Bounce delay={200}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.Sekolahku}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulSekolahku}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioSekolahku}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/sekolahku"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a href="" className="text-decoration-none text-white">
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 mx-3 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Soon
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={400}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.SobatQuran}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulSobatQuran}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioSobatQuran}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/sobatquraan"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a
												href="http://sobatquraan.kagumijakarta.sch.id"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Visit Web
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={600}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.GramediaLite}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulGramediaLite}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioGramediaLite}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/Gramedia-Lite"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a
												href="http://gramedia-lite.epizy.com/views/"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Visit Web
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={800}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.NewsBlog}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulNewsBlog}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioNewsBlog}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/news-blog"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a href="#" className="text-decoration-none text-white">
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 mx-3 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Soon
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={1000}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.StayCation}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulStaycation}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioStayCation}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/serverStaycation"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a href="#" className="text-decoration-none text-white">
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 mx-3 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Soon
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={200}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.BlibliClone}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulBlibli}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioBlibliClone}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/blibliapp_team3"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a href="#" className="text-decoration-none text-white">
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 mx-3 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Soon
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={400}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img src={props.images.MyCv} alt="" className="card-img-top" />
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulCv}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioMyCv}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa/MyCv"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a
												href="https://clever-clarke-7840a6.netlify.com"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Visit Web
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={600}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.Gesjan}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulGesjan}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descPortfolioGesjan}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a
												href="https://gesjan.netlify.app"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Visit Web
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
					<Bounce delay={800}>
						<div className="col-md-6">
							<div
								className={`card mx-5 mt-4 ${
									ThemeProps.theme === "light" ? "border-4" : "card-portfolio"
								}`}
								style={{ borderRadius: "20px 20px" }}
							>
								<img
									src={props.images.RaportLearning}
									alt=""
									className="card-img-top"
								/>
								<div className="card-body">
									<h3
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} fw-bold`}
									>
										{textJudulRaportLearning}
									</h3>
									<p
										className={`${
											ThemeProps.theme === "light" ? "text-dark" : "text-white"
										} card-text`}
									>
										{props.descRaportLearning}
									</p>
									<div className="d-flex justify-content-around align-items-center mt-3">
										<div>
											<a
												href="https://github.com/riyaraa"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? (
													<>
														<p className="mt-2 mr-2 fw-bold text-dark">
															Github
														</p>
													</>
												) : (
													<>
														<img
															src={props.images.IconGithub}
															width={40}
															className="img-fluid mx-2"
															alt="Icon GIthub"
														/>
														<p className="mt-2 mr-2 fw-bold ">Github</p>
													</>
												)}
											</a>
										</div>
										<div>
											<a
												href="https://gesjan.netlify.app"
												className="text-decoration-none text-white"
											>
												{ThemeProps.theme === "light" ? null : (
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
												)}
												<p
													className={`mt-2 mx-3 fw-bold ${
														ThemeProps.theme === "light"
															? "text-dark"
															: "text-white"
													}`}
												>
													Soon
												</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Bounce>
				</div>
			</div>
		</>
	);
}
