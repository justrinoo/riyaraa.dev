import React from "react";
import LatestBlog from "./LatestBlog";
import PostBlog from "./PostBlog";

export default function Content() {
	return (
		<>
			<div className="container">
				<div className="row">
					<PostBlog />
				</div>
				<div className="row">
					<h3 className="mt-4">
						<i>Latest Article</i>
					</h3>
					<div className="col-md-6 mt-3">
						<LatestBlog
							content={{
								desc: "this my first blog for content website :D",
								date: "20 Feb 2021",
								title: "This First Blog",
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
