import Button from "../layouts/Button";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ closeForm }) => {
  const form = useRef();
  const [errors, setErrors] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const validate = () => {
    const newErrors = {
      userName: "",
      userEmail: "",
      userPhone: "",
    };
    let isValid = true;

    if (!form.current.user_name.value.trim()) {
      newErrors.userName = "Ime i prezime je obavezno polje";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !form.current.user_email.value.trim() ||
      !emailPattern.test(form.current.user_email.value)
    ) {
      newErrors.userEmail = "Email je obavezno polje";
      isValid = false;
    }

    const phonePattern = /^[0-9]+$/;
    if (
      !form.current.user_phone.value.trim() ||
      !phonePattern.test(form.current.user_phone.value)
    ) {
      newErrors.userPhone = "Broj telefona je obavezno polje";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validate()) {
      emailjs
        .sendForm("service_6aluvig", "template_38svnci", form.current, {
          publicKey: "osDhAz9PU4wxoEcPi",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setSuccessMessage(
              "Zahtev je uspešno poslat! Kontaktiraćemo Vas u najkraćem roku."
            );
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
        >
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Zakaži pregled
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="user_name"
              id="userFirstName"
              placeholder="Ime i prezime*"
            />
            {errors.userName && (
              <p className="text-red-500 text-xs">{errors.userName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="user_email"
              id="userEmail"
              placeholder="Vaš Email*"
            />
            {errors.userEmail && (
              <p className="text-red-500 text-xs">{errors.userEmail}</p>
            )}
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="user_phone"
              id="userNumber"
              placeholder="Broj telefona*"
              style={{ MozAppearance: "textfield" }}
            />
            {errors.userPhone && (
              <p className="text-red-500 text-xs">{errors.userPhone}</p>
            )}
          </div>
          {successMessage && (
            <p className="text-green-500 text-xs text-center">
              {successMessage}
            </p>
          )}
          <div className="flex gap-5">
            <Button type="submit" title="Pošalji" />
            <button
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={() => {
                closeForm();
                document.body.style.overflow = "unset";
              }}
            >
              Zatvori
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
