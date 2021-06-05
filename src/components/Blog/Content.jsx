import React from "react";
import PostBlog from "./PostBlog";

export default function Content() {
	return (
		<>
			<div className="container">
				<div className="row mt-5">
					<div className="col">
						<h1 style={{ fontSize: "60px" }}>The Blog</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<img
							src="https://placekitten.com/g/200/300/"
							style={{ width: "100%", height: "85%" }}
							className="img-fluid"
						/>
					</div>
					<div className="col-md-6">
						<span className="text-muted fw-bold">March 20 2021</span>
						<h2>Title Blog</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Consequuntur animi voluptatum in. Animi, earum accusantium,
							repudiandae voluptatem reprehenderit illo nesciunt neque quisquam
							impedit expedita tenetur magni cum. Consequatur, culpa debitis.
						</p>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
						<PostBlog
							content={{
								image: "https://placeimg.com/640/480/tech",
								desc: "this my first blog for content website :D",
								date: "20 Feb 2021",
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
