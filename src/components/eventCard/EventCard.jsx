"use client";
import React from "react";
import Styles from "./eventCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EventCard = ({
  id,
  imgSrc = "imgage5.jpg",
  imgAlt = "Drake day",
  title = "Drake",
  description = "Drake, de son vrai nom Aubrey Drake Graham, est un rappeur, chanteur, auteur-compositeur et acteur canadien né le 24 octobre 1986 à Toronto, Ontario, Canada. Il est reconnu comme l'un des artistes les plus influents et prolifiques de sa génération.",
  date = "August 3",
  place = "Saturday, August 3 at Parc Jean-Drapeau, Montreal",
  buttonText = "BILLETS",
}) => {
  const router = useRouter();

  const eventHref = `events/${id}`;

  const handleClick = (e) => {
    e.preventDefault();

    router.push(eventHref);
  };

  return (
    <div className={Styles.eventCardContainer}>
      <div className={Styles.container}>
        <div className={Styles.fieldDay}>{date}</div>
        <div className={Styles.fielDetails}>
          <div className={Styles.title}>{title.toUpperCase()}</div>
          <div className={Styles.date}>{place}</div>
          <div className={Styles.description}>{description}</div>
        </div>
        <div className={Styles.fieldImg}>
          <Image src={imgSrc} alt={imgAlt} fill />
        </div>
      </div>
      <div className={Styles.fieldButton}>
        <button className={Styles.button} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
