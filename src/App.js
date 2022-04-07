import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/GlobalStyles";
import { lightTheme, darkTheme } from "./components/styles/themes";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

const App = () => {
	const [keyword, setKeyword] = useState('');
	const [theme, setTheme] = useState(darkTheme);

	const toggleTheme = () => {
		return theme === darkTheme 
			? setTheme(lightTheme)
			: setTheme(darkTheme);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header toggleTheme={toggleTheme} />
			<SearchBar setKeyword={setKeyword} />
			<Results keyword={keyword} />
		</ThemeProvider>
	)
}

export default App;
