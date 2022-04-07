import GlobalStyles from "./components/styles/GlobalStyles";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<SearchBar />
			<Results />
		</>
	)
}

export default App;
