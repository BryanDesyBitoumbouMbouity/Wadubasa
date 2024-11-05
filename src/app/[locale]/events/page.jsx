
import React from "react";
import Styles from "./events.module.css";


import EventCard from "@/components/eventCard/EventCard";

export const metadata = {
  title: " Page d'Evenements",

  description: "",
};

const Events = async () => {
  const getEvents = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/events", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Erreur lors du fetching data");
      }

      const data = await res.json();
      return data.events;
    } catch (error) {
      console.log(error);
    }
  };

  //

  const eventData = await getEvents();
  //console.log(eventData);

  const urlImgEvent = `/events/`;

  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Concerts en live de rap et RnB</h1>
      <p className={Styles.description}>
        {" "}
        Plongez dans une expérience musicale inoubliable avec nos concerts en
        direct de rap et RnB.
      </p>

      <div className={Styles.cardContainer}>
        {eventData?.map((item, index) => (
          <EventCard
            id={item._id}
            imgSrc={urlImgEvent + item.img}
            imgAlt={item.alt}
            title={item.title}
            description={item.description}
            date={item.date}
            place={item.place}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
