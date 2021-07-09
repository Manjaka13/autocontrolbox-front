import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Login from "../Login/Login";

export default function App() {
	const [user] = useState(null);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						{user ? <Redirect to="/" /> : <Login user={user} />}
					</Route>
					<Route path="/">
						{!user ? <Redirect to="/login" /> : <h1>Hello from home</h1>}
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
