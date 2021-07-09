import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import Login from "../Login/Login";
import Home from "../Home/Home";

export default function App() {
	const [user] = useState([]);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						{user ? <Redirect to="/" /> : <Login user={user} />}
					</Route>
					<Route path="/">{!user ? <Redirect to="/login" /> : <Home />}</Route>
				</Switch>
			</div>
		</Router>
	);
}
