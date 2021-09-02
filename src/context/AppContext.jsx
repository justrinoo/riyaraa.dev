import React, { createContext, useState } from "react";

function AppContext() {
	const ThemeContext = createContext();
	const ThemeProvider = (props) => {
		const [theme, setTheme] = useState("light");
		const changeHandlerTheme = (e) => setTheme(e.target.value);
		const stateTheme = { theme, changeHandlerTheme };
		return (
			<ThemeContext.Provider value={stateTheme}>
				{props.children}
			</ThemeContext.Provider>
		);
	};

	return {
		ThemeProvider,
		ThemeContext,
	};
}

export default AppContext();
