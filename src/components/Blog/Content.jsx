import React, { useState, useEffect } from "react";
import LatestBlog from "./LatestBlog";
import PostBlog from "./PostBlog";
import axios from "axios";
export default function Content() {
	const [blog, setBlog] = useState([]);

	const getBlog = async () => {
		try {
			const response = await axios.get("http://localhost:5000/api/v1/blog");
			setBlog(response.data.data);
		} catch (err) {
			throw new Error(err.message);
		}
	};
	useEffect(() => {
		getBlog();
	}, []);

	return (
		<>
			<div className="container">
				<div className="row">
					<PostBlog blog={blog} />
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
