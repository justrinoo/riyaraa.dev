import React, { Component } from "react";
export default class Skills extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col mx-5">
							<h4 className="mt-5">{this.props.textKnowladge}</h4>
							<hr
								style={{
									width: "50%",
									height: "4%",
									margin: "2px",
								}}
							/>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Html}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-warning mx-5 mt-2 text-center text-dark">
								HTML
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Css}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-primary mx-5 mt-2 text-center text-light">
								Css
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Javascript}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-warning mx-5 mt-2 text-center text-light">
								Javascript
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Bootstrap}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-primary mx-5 mt-2 text-center text-light">
								Bootstrap
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Php}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-info mx-5 mt-2 text-center text-light">
								Php
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Nodejs}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-success mx-5 mt-2 text-center text-light">
								NodeJs
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.ReactIcon}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-primary mx-5 mt-2 text-center text-light">
								React Js
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Expressjs}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-light mx-5 mt-2 text-center text-dark">
								Express Js
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Git}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-danger mx-5 mt-2 text-center text-light">
								Git
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Github}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-dark mx-5 mt-2 text-center text-light">
								Github
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Mysql}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-info mx-5 mt-2 text-center text-light">
								Mysql
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Figma}
								width={100}
								className="mt-4 mx-5 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-danger mx-5 mt-2 text-center text-light">
								Figma
							</p>
						</div>
					</div>
					<h4 className="mx-5 mt-5">{this.props.textLearn}</h4>
					<hr
						style={{ width: "37%", height: "3px", margin: "2px" }}
						className="mx-5"
					/>
					<div className="row ">
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Typescript}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-info mx-5 mt-2 text-center text-light">
								Typescript
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Vue}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-success mx-5 mt-2 text-center text-light">
								Vue Js
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Redux}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-primary mx-5 mt-2 text-center text-light">
								Redux
							</p>
						</div>
						<div className="col-6 col-md-3">
							<img
								src={this.props.stack.Golang}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
							<p className="fs-3 badge bg-info mx-5 mt-2 text-center text-light">
								Golang
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}
