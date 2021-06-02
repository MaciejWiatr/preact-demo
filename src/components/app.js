import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Counter from "./counter";
import MouseFollower, { MouseHoverContext } from "./mouse";
import { useRef } from "preact/hooks";

const App = () => {
	const appRef = useRef(null);

	return (
		<MouseHoverContext>
			<div id="app" ref={appRef}>
				<MouseFollower appRef={appRef} />
				<Header />
				<Router>
					<Home path="/" />
					<Counter path="/counter/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		</MouseHoverContext>
	);
};

export default App;
