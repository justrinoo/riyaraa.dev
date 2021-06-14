import React from "react";
import { Link } from "react-router-dom";

export default function PostBlog(props) {
	const data = props.blog;
	return (
		<>
			<div className="first-blog mt-5">
				<div className="row">
					<div className="col-md-6">
						<img
							src="https://placeimg.com/640/480/tech"
							className="w-75 rounded"
							alt=""
						/>
						<br />
						<div className="mt-2">
							<p className="w-75">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Asperiores veritatis dolores provident similique rem porro at
								quasi quod sed, vitae autem quos veniam aperiam facere ipsam
								excepturi hic voluptatibus officiis.
							</p>
						</div>
					</div>
					<div className="col-md-6">
						<h3>Favorite For Reading 😄</h3>
						{data.map((blogs, blogIdx) => {
							return (
								<div className="flex mt-4" key={blogIdx + 1}>
									<h6>
										<span className="fw-bold text-white">{blogs.author}</span>
										<span className="text-white"> post a blog on</span>
										<span className="text-muted fw-bold">
											&nbsp;
											{new Date(Date.now(blogs.createdAt)).toLocaleDateString()}
										</span>
									</h6>
									<Link to="/blog/:slug" className="text-decoration-none">
										<div className="card mt-2">
											<div className="card-body">
												<div className="card-title">
													<h6 className="fs-5 fw-bold text-white">
														{blogs.title}
													</h6>
												</div>
												<div className="row">
													<p className="text-truncate text-light">
														{blogs.description}
													</p>
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
