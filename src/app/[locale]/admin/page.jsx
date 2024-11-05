import React from "react";
import Styles from "./adminPage.module.css";
import Link from "next/link";
import RemoveBtn from "@/components/removeBtn/removeBtn";
import Image from "next/image";
import { useLocale } from "next-intl";

export const metadata = {
  title: { absolute: " Page admin" },
  description:
    "Une page qui permet de contacter nos agents pour plus d'information concernant nos événements",
};

export const getEvents = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/events", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Erreur lors du fetching d'événements");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Erreur lors du fetching des événements", error);
  }
};

const adminPage = async ({ params: { locale } }) => {
  const events = await getEvents();

  const linkAddPage = `admin/addEvent`;
  console.log(events);
  return (
    <div className={Styles.container}>
      <div className={Styles.containerTitleButton}>
        <h1 style={{ fontWeight: "bold" }}>Admin - Liste des événements</h1>
        <div>
          <Link href={linkAddPage} className={Styles.button}>
            Ajouter
          </Link>
        </div>
      </div>

      <table className={Styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Place</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {events?.events &&
            events?.events?.map((element) => (
              <tr key={element._id}>
                <td>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <Image
                      src={`/events/${element.img}`}
                      height={50}
                      width={50}
                    />
                    <div>{element.title}</div>
                  </div>
                </td>
                <td>{element.description}</td>
                <td>{element.date}</td>
                <td>{element.place}</td>
                <td>
                  <RemoveBtn></RemoveBtn>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default adminPage;
