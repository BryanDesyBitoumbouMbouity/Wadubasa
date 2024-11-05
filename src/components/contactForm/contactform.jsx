"use client";
import React, { useState } from "react";
import Styles from "./contactForm.module.css";

const ContactForm = () => {
  const validation = (value) => {
    let error = {};

    if (!value.nomprenom) {
      error.nomprenom = "Nom et prenom sont requis !";
    }
    if (!value.email) {
      error.email = "Email est requis !";
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
      error.email = "Email est non valide !";
    }
    if (!value.message) {
      error.message = "Message est requis !";
    } else if (value.message.length < 5) {
      error.email = "Message est tres court !";
    }
    return error;
  };

  const [formData, setFormData] = useState({
    nomprenom: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubnmit = (e) => {
    e.preventDefault();

    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors(validation({ ...formData, [name]: value }));
  };

  return (
    <>
      <form className={Styles.container} onSubmit={handleSubnmit}>
        {isSubmitted && (
          <div className={Styles.confirmation}>Merci pour votre message !</div>
        )}
        {!isSubmitted && (
          <>
            <h1 className={Styles.title}>Contactez Nous ! </h1>
            <input
              type="text"
              name="nomprenom"
              placeholder="Nom et prenom"
              value={formData.nomprenom}
              onChange={handleChange}
            />
            {errors.nomprenom && (
              <div className={Styles.error}>{errors.nomprenom}</div>
            )}
            <input
              type="text"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className={Styles.error}>{errors.email}</div>}
            <textarea
              type="text"
              name="message"
              placeholder="Ecrivez votre message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <div className={Styles.error}>{errors.message}</div>
            )}

            <button type="submit">Envoyer</button>
          </>
        )}
      </form>
    </>
  );
};

export default ContactForm;
