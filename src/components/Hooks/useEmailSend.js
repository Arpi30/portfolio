import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useEmailSend = () => {
  const [emailValues, setEmailValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e, templateID) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cav2qnu", templateID, e.target, "xhboUecfXvIkRNiiO")
      .then((res) => {
        console.log(res);
        setEmailValues(
          Object.fromEntries(
            Object.entries(emailValues).map(([key]) => [key, ""])
          )
        );
      })
      .catch((err) => console.log(err));
  };

  return { emailValues, setEmailValues, sendEmail };
};
