import ContactForm from "@/components/contactForm/ContactForm";
import React from "react";

export const metadata = {
  title: { absolute: " Contactez nous" },

  description: "uen page qui permet de contacter nos agents pour plus d'information concernant nos evenements",
};

const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
