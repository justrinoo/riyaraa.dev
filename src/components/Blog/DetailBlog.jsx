import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DetailBlog(props) {
	// console.log(props.match.params.id);
	const articleId = props.match.params.id;
	const [article, setArticle] = useState([]);
	const [isLoading, setLoading] = useState(false);

	const getArtilceOne = async () => {
		try {
			setLoading(true);
			const article = await axios.get(
				`http://localhost:5000/api/v1/blog/${articleId}`
			);
			setArticle(article.data.data);
			setLoading(false);
		} catch (err) {
			setLoading(true);
			throw new Error(err);
		}
	};

	useEffect(() => {
		getArtilceOne();
	}, [articleId]);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12 mt-5">
						<Link
							to="/blog"
							className="text-decoration-none text-white fw-bold"
						>
							Back to read more blog
						</Link>
						{isLoading ? (
							<p>Loading...</p>
						) : (
							<div className="card  bg-transparent border border-2">
								<div className="card-body">
									<div className="card-title">
										<div className="d-flex justify-content-between">
											<h4>{article.title}</h4>
											<Link to="/">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-6"
													fill="none"
													style={{ color: "#fff" }}
													width={20}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
													/>
												</svg>
											</Link>
										</div>
									</div>
									<p>{article.description}</p>
									<div className="d-flex justify-content-between align-items-center">
										<span className="text-muted fw-bold">
											riyaraa published{" "}
											{new Date(Date.now(article.createdAt)).toDateString()}
										</span>
										<Link className="text-decoration-none text-danger fw-bold">
											X
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
