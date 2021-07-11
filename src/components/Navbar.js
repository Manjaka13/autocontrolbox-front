import React from "react";
import Navbarprofile from "./Navbarprofile";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Navbarprofile />
			<p className="bold navbar__clock">60 : 00 : 00</p>
		</nav>
	);
}
