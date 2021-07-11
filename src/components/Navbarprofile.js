import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
	faCaretDown,
	faLock,
	faPauseCircle,
	faPlayCircle,
	faStopCircle,
} from "@fortawesome/free-solid-svg-icons";
import profile_image from "../images/profile-default.jpg";

export default function Navbarprofile() {
	return (
		<div className="navbarprofile">
			<div className="navbarprofile__profile">
				<img
					className="navbarprofile__image"
					src={profile_image}
					alt="Profile avatar"
				/>
			</div>
			<h1 className="navbarprofile__name">Raherimanana</h1>
			<Icon className="navbarprofile__caretDown" icon={faCaretDown} />
			<ul className="navbarprofile__menu">
				<li className="navbarprofile__item">
					<Icon className="navbarprofile__icon" icon={faLock} /> Logout
				</li>
				<li className="navbarprofile__separator"></li>
				<li className="navbarprofile__item">
					<Icon className="navbarprofile__icon" icon={faPlayCircle} /> Start clock
				</li>
				<li className="navbarprofile__item">
					<Icon className="navbarprofile__icon" icon={faPauseCircle} /> Pause clock
				</li>
				<li className="navbarprofile__item">
					<Icon className="navbarprofile__icon" icon={faStopCircle} /> Stop clock
				</li>
			</ul>
		</div>
	);
}
