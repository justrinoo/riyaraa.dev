import React, { createContext, useState } from "react";

function ThemeContext() {
	const ThemeContext = createContext();
	const ThemeProvider = (props) => {
		const [theme, setTheme] = useState("light");
		const changeTheme = (e) => setTheme(e.target.value);
		const themeState = { theme, changeTheme };
		return (
			<ThemeContext.Provider value={themeState}>
				{props.children}
			</ThemeContext.Provider>
		);
	};
	return {
		ThemeProvider,
		ThemeContext,
	};
}

export default ThemeContext();
