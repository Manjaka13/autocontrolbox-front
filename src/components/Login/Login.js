import React, { useState, useRef } from "react";
import Spinner from "../Spinner/Spinner";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faKey, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
	const [error, set_error] = useState("");
	const [loading, set_loading] = useState(false);
	const name_ref = useRef(null);
	const password_ref = useRef(null);

	const submit = (e) => {
		const name = name_ref.current.value;
		const password = password_ref.current.value;
		e.preventDefault();
		set_loading(true);
		if (name && name.length > 3 && password && password.length > 3) {
			console.log("OK");
			set_error("");
		} else set_error("Name or password is too short.");
		set_loading(false);
	};

	const form_bottom_obj = loading ? (
		<Spinner />
	) : (
		<button className="login__submit" type="submit">
			<Icon className="login__icon" icon={faCaretRight} /> Log in
		</button>
	);

	return (
		<div className="login">
			<div className="login__container">
				<div className="login__head">
					<h1 className="login__title">
						<Icon className="login__icon" icon={faKey} /> Login
					</h1>
				</div>
				<form className="login__form" onSubmit={submit}>
					<div className="login__input-group">
						<div className="login__icon-box">
							<Icon className="login__icon icon" icon={faUser} />
						</div>
						<input
							className="login__input"
							type="text"
							placeholder="Your ID / Name"
							ref={name_ref}
						/>
					</div>
					<div className="login__input-group">
						<div className="login__icon-box">
							<Icon className="login__icon icon" icon={faKey} />
						</div>
						<input
							className="login__input"
							type="password"
							placeholder="Your password"
							ref={password_ref}
						/>
					</div>
					{form_bottom_obj}
				</form>
				<p className="login__caption">{error}</p>
			</div>
		</div>
	);
}
