import React from "react";
import Styles from "./templatePage.module.css";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";

const TemplatePage = ({
	title = "Music for a Sunday Afternoon !",
	description = "It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged. It was popularised with the release of Letraset sheets containing Lorem Ipsum passages",
	textButton1 = " READ MORE",
	textButton2 = "CONTACT",
	src = "/music.jpg",
	alt = "music",
	date,
	place,
}) => {
	return (
		<div className={Styles.container}>
			<div className={Styles.textContainer}>
				<h1 className={Styles.title}>{title}</h1>
				<p className={Styles.description}>{description}</p>
				<div className={Styles.date}>
					<CalendarMonthIcon />
					{date}
				</div>
				<div className={Styles.place}>
					<PlaceIcon />
					{place}
				</div>
				<div className={Styles.buttons}>
					<button className={Styles.button}>{textButton1}</button>
					<button className={Styles.button}>{textButton2}</button>
				</div>
			</div>

			<div className={Styles.imgContainer}>
				<Image src={src} alt={alt} fill />
			</div>
		</div>
	);
};

export default TemplatePage;
