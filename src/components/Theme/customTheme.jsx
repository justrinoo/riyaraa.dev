import React, { useContext } from "react";
import CustomStyles from "./CustomStyles.module.css";
import AppContext from "../../context/AppContext";

const { ThemeContext } = AppContext;

export default function CustomTheme() {
	const ThemeProps = useContext(ThemeContext);
	return (
		<>
			<div className="mt-5 text-center">
				<button
					className={`${CustomStyles.btnLightSwtich} mx-2`}
					onClick={ThemeProps.changeHandlerTheme}
					id="light"
					value="light"
				>
					Light
				</button>
				<button
					className={`${CustomStyles.btnDarkSwtich} mx-2`}
					onClick={ThemeProps.changeHandlerTheme}
					id="dark"
					value="dark"
				>
					Dark
				</button>
			</div>
		</>
	);
}
