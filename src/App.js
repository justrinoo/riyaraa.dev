import React from "react";
import TheApp from "./router/TheApp";
import AppContext from "./context/AppContext";
import "./App.scss";
const { ThemeProvider } = AppContext;
function App() {
	window.document.title = "Rino Satya Putra";
	return (
		<ThemeProvider>
			<TheApp />
		</ThemeProvider>
	);
}

export default App;
