import React, { Component } from "react";
import Html from "../../assets/images/HTML.png";
import Css from "../../assets/images/CSS.png";
import Javascript from "../../assets/images/Javascript.png";
import Bootstrap from "../../assets/images/Bootstrap.png";
import Php from "../../assets/images/Php.png";
import Nodejs from "../../assets/images/NodeJs.png";
import ReactIcon from "../../assets/images/React.png";
import Expressjs from "../../assets/images/ExpressJs.png";
import Git from "../../assets/images/Git.png";
import Github from "../../assets/images/Github.png";
import Mysql from "../../assets/images/MYSQL.png";
import Figma from "../../assets/images/FIGMA.png";
import Typescript from "../../assets/images/Typescript.png";
import Vue from "../../assets/images/Vue.png";
import Redux from "../../assets/images/Redux.png";
import Golang from "../../assets/images/Golang.png";
import IconGithub from "../../assets/images/IconGithub.png";
import Sekolahku from "../../assets/images/sekolahku.png";
import SobatQuran from "../../assets/images/sobatquran.png";
import GramediaLite from "../../assets/images/GramediaLite.jpg";
import NewsBlog from "../../assets/images/News-Blog.jpg";
import StayCation from "../../assets/images/stayCation.png";
import MyCv from "../../assets/images/myCv.png";
import BlibliClone from "../../assets/images/blibli-clone.png";
import Gesjan from "../../assets/images/gesjan.png";
import RaportLearning from "../../assets/images/raportLearning.jpg";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
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
										src={this.props.images.profile}
										alt="My Face :D"
										style={{
											width: "180px",
											height: "170px",
											borderRadius: "100%",
										}}
										className="card-img-top img-fluid"
									/>
									<h3 className="mt-4 fw-bold text-me">{this.props.name}</h3>
									<p className="text-md-center mt-3 text-story fw-normal">
										{this.props.description}
									</p>
									<h5 className="mt-3 fw-bold">{this.props.findMe}</h5>
									<div className="d-flex justify-content-center">
										<a href="#">
											<img
												src={this.props.images.github}
												className="img-fluid mx-3 mt-3"
												width={38}
												alt="Github Icon"
											/>
										</a>
										<a href="#">
											<img
												src={this.props.images.telegram}
												className="img-fluid mx-3 mt-3"
												width={38}
												alt="Telegram Icon"
											/>
										</a>
										<a href="#">
											<img
												src={this.props.images.instagram}
												className="img-fluid mx-3 mt-3"
												width={38}
												alt="Instagram Icon"
											/>
										</a>
										<a href="#">
											<img
												src={this.props.images.twitter}
												className="img-fluid mx-3 mt-3"
												width={38}
												alt="Twitter Icon"
											/>
										</a>
										<a href="#">
											<img
												src={this.props.images.linkedin}
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

				<section className="mt-5">
					<Skills
						textKnowladge="Knowledge skills in website technology 💻"
						stack={{
							Html,
							Css,
							Javascript,
							Bootstrap,
							Php,
							Nodejs,
							ReactIcon,
							Expressjs,
							Git,
							Github,
							Mysql,
							Figma,
							Typescript,
							Vue,
							Redux,
							Golang,
						}}
						textLearn="Currently in the learning stage 🔄"
					/>
				</section>
				<section className="mt-5">
					<Portfolio
						images={{
							Sekolahku,
							SobatQuran,
							GramediaLite,
							NewsBlog,
							StayCation,
							BlibliClone,
							MyCv,
							Gesjan,
							RaportLearning,
							IconGithub,
						}}
						descPortfolioSekolahku="Sekolahku adalah sebuah website untuk kamu yang ingin mencari nama-nama sekolah dikota kamu atau di indonesia"
						descPortfolioSobatQuran="Sobat Quran sebuah website untuk membaca alquran ayat, dan suratnya juga lengkap, dan bisa melihat jadwal sholat"
						descPortfolioGramediaLite="GramediaLite adalah sebuah website seperti website Gramedia aslinya semacam e-commerce, dan website ini sebagai bahan belajar saya untuk lomba LSP(Lembaga Sertifikasi Profesi) Tingkat SMK 2021"
						descPortfolioNewsBlog="News Blog sebuah website seperti website penyedia blog, kamu bisa menulis blog, atau melihat blog orang lain"
						descPortfolioStayCation="Staycation sebuah website untuk mencari lokasi wisata diwilayah terdekat, anda dapat menikmati keindahan dengan hanya duduk saja"
						descPortfolioBlibliClone="Blibli Clone website seperti blibli.com, website ini sebagai project latihan saya untuk masuk prakerin"
						descPortfolioMyCv="Website cv versi awal saya atau versi beta"
						descPortfolioGesjan="Gesjan adalah website penyedia makanan ringan supermarket mini"
					/>
				</section>
			</>
		);
	}
}
