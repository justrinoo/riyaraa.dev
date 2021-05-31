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
export default class Skills extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col mx-5">
							<h4 className="mx-3 mt-5">
								Knowledge skills in website technology 💻
							</h4>
							<hr
								className="mx-3"
								style={{
									width: "50%",
									height: "4%",
									margin: "2px",
								}}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3">
							<img src={Html} className="mx-5 mt-4 img-fluid" alt="Html Icon" />
						</div>
						<div className="col-md-3">
							<img
								src={Css}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Javascript}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Bootstrap}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Php}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Nodejs}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={ReactIcon}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Expressjs}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Git}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Github}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Mysql}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Figma}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
					</div>
					<h4 className="mx-5 mt-5">Currently in the learning stage 🔄</h4>
					<hr
						style={{ width: "37%", height: "3px", margin: "2px" }}
						className="mx-5"
					/>
					<div className="row">
						<div className="col-md-3">
							<img
								src={Typescript}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Vue}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Redux}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={Golang}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}
