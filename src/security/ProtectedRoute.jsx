import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...restProps }) {
	const isToken = localStorage.getItem("token");
	console.log("this", isToken);
	return (
		<>
			<Route
				{...restProps}
				render={(props) =>
					isToken ? <Component {...props} /> : <Redirect to="/private/login" />
				}
			/>
		</>
	);
}
