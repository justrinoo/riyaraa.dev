import React from "react";

export default function PostBlog(props) {
	return (
		<>
			<div className="card border border-dark bg-transparent">
				<div className="card-body">
					<h5>{props.content.title}</h5>
					<p className="text-muted">{props.content.desc}</p>
					<div className="flex">
						<span>• riyaraa </span>
						<span className="mx-2"> Published {props.content.date}</span>
					</div>
				</div>
			</div>
		</>
	);
}
