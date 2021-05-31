import React from "react";
import Navigation from "../components/Header/Navigation";
import Body from "../components/Hero/Body";
import Footer from "../components/Footer/Footer";
class Spa extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<Body />
				<Footer />
			</>
		);
	}
}

export default Spa;
