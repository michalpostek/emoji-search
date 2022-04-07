import { useState } from "react";

import GlobalStyles from "./components/styles/GlobalStyles";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

const App = () => {
	const [keyword, setKeyword] = useState('');

	return (
		<>
			<GlobalStyles />
			<Header />
			<SearchBar setKeyword={setKeyword} />
			<Results keyword={keyword} />
		</>
	)
}

export default App;
