import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Posts(props) {
	// console.log(props);
	const redirect = props.history;
	const [article, setArticle] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [author, setAuthor] = useState("");
	const [isLoading, setLoading] = useState(false);

	const createNewPost = async (e) => {
		try {
			setLoading(true);
			e.preventDefault();
			const dataArticle = { title, description, author };
			const newArticle = await axios.post(
				"http://localhost:5000/api/v1/blog/create",
				dataArticle
			);
			if (newArticle.status === 200) {
				setArticle(
					article.concat({
						title,
						description,
						author,
					})
				);
				setLoading(false);
				redirect.push("/blog");
			}
		} catch (err) {
			setLoading(true);
			throw new Error(err.message);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div className="container-fluid">
				<nav className="navbar navbarr-expand-md">
					<div className="navbar-brand">
						<span>Create Post</span>
					</div>
					<div className="nav-item mx-auto">
						<span className="text-decoration-none text-white fw-bold">
							New Article
						</span>
					</div>
					<div className="nav-item">
						<Link
							to="/blog"
							className="text-decoration-none text-white fw-bold"
						>
							X
						</Link>
					</div>
				</nav>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<form method="post" onSubmit={createNewPost}>
							<div
								className="card bg-white border border-2 border-dark text-dark"
								style={{ height: "45vh" }}
							>
								<div className="card-body">
									<div className="mb-3">
										<input
											type="text"
											className="form-control input-post"
											style={{
												border: "none",
												fontSize: "48px",
											}}
											name="title"
											id="title"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
											placeholder="New post title here..."
										/>
									</div>
									<div className="mb-3">
										<input
											type="text"
											className="form-control input-post"
											style={{ border: "none", fontWeight: "normal" }}
											name="description"
											id="description"
											value={description}
											onChange={(e) => setDescription(e.target.value)}
											placeholder="Write your post content here..."
										/>
									</div>
									<div className="mb-3">
										<input
											type="text"
											className="form-control input-post"
											style={{ border: "none", fontWeight: "normal" }}
											name="author"
											id="author"
											value={author}
											onChange={(e) => setAuthor(e.target.value)}
											placeholder="Who is the author..."
										/>
									</div>
								</div>
							</div>
							<button className="btn btn-info mt-3 fw-bold" type="submit">
								{isLoading ? <p>Loading...</p> : "Publish"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
