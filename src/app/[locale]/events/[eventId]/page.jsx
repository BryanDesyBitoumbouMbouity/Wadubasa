import React from "react";
import TemplatePage from "@/components/templatePage/TemplatePage";
import Link from "next/link";
import styles from "./eventDetails.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const getEventById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/events/${id}`);

  if (!res.ok) {
    console.log("Erreur lors du fetching data");
  }

  const data = await res.json();
  return data.event;
};
const EventDetails = async ({ params }) => {
  const event = await getEventById(params.eventId);

  const urlImgEvent = `/events/${event?.img}`;

  const linkToEvents = `events`;

  return (
    <div>
      {event ? (
        <div className={styles.container}>
          <Link className={styles.link} href="javascript:history.back()">
            <ArrowBackIosIcon />
            {" Retourner"}
          </Link>
          <TemplatePage
            title={event.title}
            description={event.description}
            src={urlImgEvent}
            alt={event.alt}
            date={event.date}
            place={event.place}
            textButton1="BILLETS"
          />
        </div>
      ) : (
        <div>L'événement avec l'ID {params.eventId} n'a pas été trouvé.</div>
      )}
    </div>
  );
};

export default EventDetails;
