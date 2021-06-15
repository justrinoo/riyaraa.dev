import React, { useState, useEffect } from "react";
import LatestBlog from "./LatestBlog";
import PostBlog from "./PostBlog";
import axios from "axios";
export default function Content() {
	const [blog, setBlog] = useState([]);
	const [favoriteBlog, setFavoriteBlog] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const getBlog = async () => {
		try {
			setLoading(true);
			const response = await axios.get("http://localhost:5000/api/v1/blog");
			setBlog(response.data.data);
			setFavoriteBlog(response.data.data[0]);
			// console.log(response.data.data);
			setLoading(false);
		} catch (err) {
			setLoading(true);
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
					{isLoading === true ? (
						<div className="d-flex justify-content-center">
							<span class="mt-3">Loading...</span>
						</div>
					) : (
						<PostBlog blog={blog} favoriteBlog={favoriteBlog} />
					)}
				</div>
				<div className="row">
					<h3 className="mt-4">
						<i>Latest Article</i>
					</h3>

					<div className="col-md-6 mt-3">
						{isLoading ? (
							<div className="d-flex justify-content-center">
								<span class="mt-3">Loading...</span>
							</div>
						) : (
							<LatestBlog
								content={{
									desc: "this my first blog for content website :D",
									date: "20 Feb 2021",
									title: "This First Blog",
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
