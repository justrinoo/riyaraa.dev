import axios from "axios";
import React, { useState } from "react";

const endpoint = "http://localhost:5000/api/v1/user/login";
export default function Login(props) {
	const redirect = props.history;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const userLoged = async () => {
		try {
			const dataUser = {
				email,
				password,
			};
			const user = await axios.post(endpoint, dataUser);
			let author = "";
			if (user.status === 200) {
				for (const i in user.data.data) {
					author += `${user.data.data[i].firstName}`;
				}
				localStorage.setItem("email", user.data.data.email);
				localStorage.setItem("firstName", user.data.data.firstName);
				localStorage.setItem("role", user.data.data.role);
				localStorage.setItem("token", user.data.token);
				redirect.push("/blog");
			}
		} catch (err) {
			alert("maaf user tidak ada!");
		}
	};

	const handleLogin = (e) => {
		e.preventDefault();
		userLoged();
	};

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-md-6">
						<div className="card" style={{ marginTop: "150px" }}>
							<div className="card-body">
								<div className="card-title">
									<h2 className="text-center">PRIVATE LOGIN 🤫</h2>
								</div>
								<hr style={{ height: "2px" }} />
								<form onSubmit={handleLogin} method="POST">
									<div className="mb-3">
										<label htmlFor="email" className="form-label">
											Email
										</label>
										<input
											type="email"
											className="form-control"
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="password" className="form-label">
											Password
										</label>
										<input
											type="password"
											className="form-control"
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
									<button className="btn btn-primary btn-block" type="submit">
										Login now!
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
