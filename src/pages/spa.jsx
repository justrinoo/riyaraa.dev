import React from "react";
import About from "../components/Hero/About";
import Blog from "../components/Hero/Blog";
import { Route, Switch } from "react-router-dom";
import Skills from "../components/Hero/Skills";
import GithubIcon from "../assets/images/icons/github.svg";
import InstagramIcon from "../assets/images/icons/instagram.svg";
import TelegramIcon from "../assets/images/icons/telegram.svg";
import TwitterIcon from "../assets/images/icons/twitter.svg";
import LinkedinIcon from "../assets/images/icons/linkedin.svg";
import Profile from "../assets/images/profile.png";
import Html from "../assets/images/HTML.png";
import Css from "../assets/images/CSS.png";
import Javascript from "../assets/images/Javascript.png";
import Bootstrap from "../assets/images/Bootstrap.png";
import Php from "../assets/images/Php.png";
import Nodejs from "../assets/images/NodeJs.png";
import ReactIcon from "../assets/images/React.png";
import Expressjs from "../assets/images/ExpressJs.png";
import Git from "../assets/images/Git.png";
import Github from "../assets/images/Github.png";
import Mysql from "../assets/images/MYSQL.png";
import Figma from "../assets/images/FIGMA.png";
import Typescript from "../assets/images/Typescript.png";
import Vue from "../assets/images/Vue.png";
import Redux from "../assets/images/Redux.png";
import Golang from "../assets/images/Golang.png";
import IconGithub from "../assets/images/IconGithub.png";
import Sekolahku from "../assets/images/sekolahku.png";
import SobatQuran from "../assets/images/sobatquran.png";
import GramediaLite from "../assets/images/GramediaLite.jpg";
import NewsBlog from "../assets/images/News-Blog.jpg";
import StayCation from "../assets/images/stayCation.png";
import MyCv from "../assets/images/myCv.png";
import BlibliClone from "../assets/images/blibli-clone.png";
import Gesjan from "../assets/images/gesjan.png";
import RaportLearning from "../assets/images/raportLearning.jpg";
import Projects from "../components/Hero/Portfolio";
import LetsTalk from "../components/Footer/Footer";
import NotFound from "../components/NotFound";
import Login from "../components/Private/Login";
import DetailBlog from "../components/Blog/DetailBlog";
import Posts from "../components/Blog/Posts";
function Spa() {
	return (
		<>
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => (
						<About
							images={{
								github: GithubIcon,
								instagram: InstagramIcon,
								telegram: TelegramIcon,
								twitter: TwitterIcon,
								linkedin: LinkedinIcon,
								profile: Profile,
							}}
							{...props}
						/>
					)}
				/>
				<Route
					exact
					path="/about"
					render={(props) => (
						<About
							images={{
								github: GithubIcon,
								instagram: InstagramIcon,
								telegram: TelegramIcon,
								twitter: TwitterIcon,
								linkedin: LinkedinIcon,
								profile: Profile,
							}}
							{...props}
						/>
					)}
				/>
				<Route
					path="/skills"
					render={() => (
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
					)}
				/>
				<Route
					path="/projects"
					render={(props) => (
						<Projects
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
							descRaportLearning="Raport online untuk siswa dan siswi melihat hasil belajar"
							{...props}
						/>
					)}
				/>
				<Route
					path="/lets-talk"
					render={(props) => (
						<LetsTalk
							textFooterFirst="Interested in working together?"
							textSendEmail="Send me email!"
							textMyGmail="rinosatyaputra.id@gmail.com"
							Icons={{
								github: GithubIcon,
								instagram: InstagramIcon,
								telegram: TelegramIcon,
								twitter: TwitterIcon,
								linkedin: LinkedinIcon,
								profile: Profile,
							}}
							mailto="mailto:rinosatyaputra.id@gmail.com"
							{...props}
						/>
					)}
				/>
				<Route exact path="/blog" component={Blog} />
				<Route
					exact
					path="/private/login"
					render={(props) => <Login {...props} />}
				/>
				<Route
					exact
					path="/blog/:id"
					render={(props) => <DetailBlog {...props} />}
				/>
				<Route
					exact
					path="/blog/create/new"
					render={(props) => <Posts {...props} />}
				/>
				<Route path="*" component={NotFound} />
			</Switch>
		</>
	);
}

export default Spa;
