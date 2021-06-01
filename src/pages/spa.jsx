import React from "react";
import Navigation from "../components/Header/Navigation";
import Body from "../components/Hero/Body";
import Footer from "../components/Footer/Footer";
import GithubIcon from "../assets/images/icons/github.svg";
import InstagramIcon from "../assets/images/icons/instagram.svg";
import TelegramIcon from "../assets/images/icons/telegram.svg";
import TwitterIcon from "../assets/images/icons/twitter.svg";
import LinkedinIcon from "../assets/images/icons/linkedin.svg";
import Profile from "../assets/images/profile.png";

class Spa extends React.Component {
	render() {
		return (
			<>
				<Navigation />
				<Body
					images={{
						github: GithubIcon,
						instagram: InstagramIcon,
						telegram: TelegramIcon,
						twitter: TwitterIcon,
						linkedin: LinkedinIcon,
						profile: Profile,
					}}
				/>
				<Footer
					textFooterFirst="Interested in working together?"
					textSendEmail="Send me email!"
					textMyGmail="rinosatyaputra.id@gmail.com"
					Icons={{
						github: GithubIcon,
						instagram: InstagramIcon,
						telegram: TelegramIcon,
						twitter: TwitterIcon,
						linkedin: LinkedinIcon,
						profile: Profile,
					}}
				/>
			</>
		);
	}
}

export default Spa;
