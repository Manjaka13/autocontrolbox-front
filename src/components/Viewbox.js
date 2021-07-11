import React, { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faLock } from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import lottie_clock from "../assets/lotties/clock.json";

export default function Viewbox() {
	const [active_cell, set_active_cell] = useState([2, 3]);
	//Left column from 1 to 4
	const numberitem_1 = [1, 2, 3, 4];
	const mapped_numberitem_1 = numberitem_1.map((item, key) => {
		const is_active = active_cell[1] < 4 && active_cell[1] === key;
		const cn_item = is_active
			? "numberlist__item numberlist__item--active"
			: "numberlist__item";
		return (
			<li className={cn_item} key={key}>
				{item}
			</li>
		);
	});
	//Right column from 5 to 8
	const numberitem_2 = [5, 6, 7, 8];
	const mapped_numberitem_2 = numberitem_2.map((item, key) => {
		const is_active = active_cell[1] >= 4 && active_cell[1] % 4 === key;
		const cn_item = is_active
			? "numberlist__item numberlist__item--active"
			: "numberlist__item";
		return (
			<li className={cn_item} key={key}>
				{item}
			</li>
		);
	});
	const subdivision = 3;
	const shift = 60;
	//Left clock row subdivision
	let mapped_subdivision_left = [];
	for (let i = 0, current = 0; i < subdivision; i++) {
		const next = current + shift / subdivision;
		const is_active = active_cell[0] < subdivision && active_cell[0] === i;
		const cn_item = is_active
			? "subdivision__item subdivision__item--active"
			: "subdivision__item";
		mapped_subdivision_left.push(
			<li className={cn_item} key={i}>
				{current} <Icon className="subdivision__icon" icon={faCaretRight} /> {next}
			</li>
		);
		current = next;
	}
	//Right clock row subdivision
	let mapped_subdivision_right = [];
	for (let i = 0, current = 0; i < subdivision; i++) {
		const next = current + shift / subdivision;
		const is_active =
			active_cell[0] >= subdivision && active_cell[0] % subdivision === i;
		const cn_item = is_active
			? "subdivision__item subdivision__item--active"
			: "subdivision__item";
		mapped_subdivision_right.push(
			<li className={cn_item} key={i}>
				{current} <Icon className="subdivision__icon" icon={faCaretRight} /> {next}
			</li>
		);
		current = next;
	}
	//Content left rows
	const rows_left = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	const mapped_rows_left = rows_left.map((row, row_key) => {
		const cells = row.map((cell, cell_key) => (
			<li className="row__cell" key={cell_key}>
				<div className="row__item1"></div>
				<div className="row__item2"></div>
			</li>
		));
		return (
			<ul className="row" key={row_key}>
				{cells}
			</ul>
		);
	});
	//Content right rows
	const rows_right = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];
	const mapped_rows_right = rows_right.map((row, row_key) => {
		const cells = row.map((cell, cell_key) => (
			<li className="row__cell" key={cell_key}>
				<div className="row__item1"></div>
				<div className="row__item2"></div>
			</li>
		));
		return (
			<ul className="row" key={row_key}>
				{cells}
			</ul>
		);
	});
	//Left clock icon status
	const clock_left_active = active_cell[0] < subdivision;
	const clock_icon_left_cn = clock_left_active
		? "viewbox__clockicon viewbox__clockicon--active"
		: "viewbox__clockicon";
	const clock_icon_left = clock_left_active ? (
		<Lottie animationData={lottie_clock} />
	) : (
		<Icon icon={faLock} />
	);
	//Right clock icon status
	const clock_right_active = active_cell[0] >= subdivision;
	const clock_icon_right_cn = clock_right_active
		? "viewbox__clockicon viewbox__clockicon--active"
		: "viewbox__clockicon";
	const clock_icon_right = clock_right_active ? (
		<Lottie animationData={lottie_clock} />
	) : (
		<Icon icon={faLock} />
	);
	//View box status
	const viewbox_left_active = clock_left_active
		? "viewbox__left viewbox__left--active"
		: "viewbox__left";
	const viewbox_right_active = clock_right_active
		? "viewbox__right viewbox__right--active"
		: "viewbox__right";

	return (
		<div className="viewbox">
			<div className="viewbox__box">
				<div className={viewbox_left_active}>
					<ul className="numberlist">
						<li className={clock_icon_left_cn}>{clock_icon_left}</li>
						{mapped_numberitem_1}
					</ul>
					<div className="ihmcontent">
						<ul className="subdivision">{mapped_subdivision_left}</ul>
						{mapped_rows_left}
					</div>
				</div>
				<div className={viewbox_right_active}>
					<ul className="numberlist">
						<li className={clock_icon_right_cn}>{clock_icon_right}</li>
						{mapped_numberitem_2}
					</ul>
					<div className="ihmcontent">
						<ul className="subdivision">{mapped_subdivision_right}</ul>
						{mapped_rows_right}
					</div>
				</div>
			</div>
		</div>
	);
}
