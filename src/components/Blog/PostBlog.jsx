import React from "react";

export default function PostBlog(props) {
	return (
		<>
			<div className="card bg-transparent mt-3">
				<img src={props.content.image} className="img-card-top" alt="" />
				<div className="card-body">
					<span className="text-muted fw-bold">
						Published: {props.content.date}
					</span>
					<p className="mt-2">{props.content.desc}</p>
				</div>
			</div>
		</>
	);
}
