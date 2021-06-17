import React from "react";
import { Link } from "react-router-dom";

export default function PostBlog(props) {
	const data = props.blog;
	return (
		<>
			<div className="first-blog mt-5 ">
				<div className="row">
					<div className="col-md-6">
						<div className="card bg-transparent">
							<img
								src="https://placeimg.com/640/480/tech"
								className="w-100 rounded card-img-top"
								alt=""
							/>
							<div className="card-body  border-none">
								<br />
								<div className="mt-2">
									<p className="w-100">{props.favoriteBlog.description}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<h3 className="mt-3">Favorite For Reading 😄</h3>

						{data.map((blogs, blogIdx) => {
							return (
								<div className="mt-4" key={blogIdx + 1}>
									<h6>
										<span className="fw-bold text-white">{blogs.author}</span>
										<span className="text-white"> post a blog on</span>
										<span className="text-muted fw-bold">
											&nbsp;
											{new Date(Date.now(blogs.createdAt)).toDateString()}
										</span>
									</h6>
									<Link
										to={`/blog/${blogs.id}`}
										className="text-decoration-none"
									>
										<div className="card mt-2">
											<div className="card-body">
												<div className="card-title">
													<h6 className="fs-5 fw-bold text-white">
														{blogs.title}
													</h6>
												</div>
												<div className="row">
													<div className="col-md-12">
														<p className="text-truncate text-light">
															{blogs.description}
														</p>
													</div>
												</div>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
