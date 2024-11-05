"use client";
import React, { useState } from "react";
import Styles from "./addEvent.module.css";
import { useRouter } from "next/navigation";

const addEventForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    place: "",
    img: "",
    alt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubnmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/events/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        console.log("event created");
        router.push("/admin");
      } else {
        console.error("Failed to create the event");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={Styles.container} onSubmit={handleSubnmit}>
        <h1 className={Styles.title}>Ajouter un nouveau evenement </h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={formData.place}
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="Image"
          value={formData.img}
          onChange={handleChange}
        />
        <input
          type="text"
          name="alt"
          placeholder="Alt"
          value={formData.alt}
          onChange={handleChange}
        />

        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};

export default addEventForm;
