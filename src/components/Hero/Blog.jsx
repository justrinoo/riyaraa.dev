import React from "react";
import Content from "../Blog/Content";
import Header from "../Blog/Header";
import Footer from "../Blog/Footer";

export default function Blog(props) {
	const history = props.history;
	return (
		<>
			<Header history={history} />
			<Content history={history} />
			<Footer />
		</>
	);
}
