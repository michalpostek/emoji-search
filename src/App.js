import { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/styles/GlobalStyles";
import { theme } from "./components/styles/theme";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

const App = () => {
	const [keyword, setKeyword] = useState('');

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header />
			<SearchBar setKeyword={setKeyword} />
			<Results keyword={keyword} />
		</ThemeProvider>
	)
}

export default App;
