import React, { Component } from "react";
export default class Skills extends Component {
	render() {
		return (
			<>
				<div className="container">
					<div className="row">
						<div className="col mx-5">
							<h4 className="mx-3 mt-5">{this.props.textKnowladge}</h4>
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
							<img
								src={this.props.stack.Html}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Css}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Javascript}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Bootstrap}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Php}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Nodejs}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.ReactIcon}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Expressjs}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Git}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Github}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Mysql}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Figma}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
					</div>
					<h4 className="mx-5 mt-5">{this.props.textLearn}</h4>
					<hr
						style={{ width: "37%", height: "3px", margin: "2px" }}
						className="mx-5"
					/>
					<div className="row">
						<div className="col-md-3">
							<img
								src={this.props.stack.Typescript}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Vue}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Redux}
								width={100}
								className="mx-5 mt-4 img-fluid"
								alt="Html Icon"
							/>
						</div>
						<div className="col-md-3">
							<img
								src={this.props.stack.Golang}
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
