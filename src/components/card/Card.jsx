"use client";
import React from "react";
import Styles from "./card.module.css";
import { useRouter } from "next/navigation";

const Card = ({
	id,
	imgSrc,
	imgAlt,
	title,
	description,
	buttonText = "Reserver",
	isProfile = false,
}) => {
	const router = useRouter();

	const eventHref = `/events/${id}`;

	const handleClick = (e) => {
		e.preventDefault();
		if (isProfile) {
			console.log("test profile");
		} else {
			router.push(eventHref);
		}
	};

	return (
		<div className={Styles.cardContainer}>
			{imgSrc &&
				imgAlt &&
				(isProfile ? (
					<img src={imgSrc} alt={imgAlt} className={Styles.avatar} />
				) : (
					<img src={imgSrc} alt={imgAlt} className={Styles.cardImg} />
				))}
			{title && <h1 className={Styles.cardTitle}>{title}</h1>}
			{description && <p className={Styles.cardDescription}>{description}</p>}
			<button className={Styles.button} onClick={handleClick}>
				{buttonText}
			</button>
		</div>
	);
};

export default Card;
