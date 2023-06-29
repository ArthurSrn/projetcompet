"use client"
import React, { useState, useRef } from "react";
import { sendContactForm } from "services";

const Contact = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Votre demande a bien était validé nous revenons vite vers vous !");
      formRef.current.reset();
    } else {
      setMessage("Aie votre demande n'est pas valide !  Veuillez réessayer");
    }
  };

  return (

      <div className="flex flex-col">
        <div>
          <div>
            <span
              onClick={() => setMessage("bienvenue")}
            >
      
            </span>
          </div>
          <form className="flex flex-col"
            ref={formRef}
            onSubmit={submitContact}
          >
            <input className="text-dark-green  border-dark-green text-sm border rounded-[10px] p-3  bg-transparent w-full max-w-lg "
              required
              placeholder="Nom"
              type={"text"}
              minLength={3}
              maxLength={25}
            />
            <input className="text-dark-green  border-dark-green text-sm border rounded-[10px] p-3 my-[15px] bg-transparent w-full max-w-lg "
              required
              placeholder="Email Address*"
              type={"email"}
            />
            <textarea className="text-dark-green  border-dark-green text-sm border rounded-[10px] p-3  bg-transparent w-full max-w-lg "
              required
              placeholder="Bonjour, Je suis intéressé(e) par le local de ..."
              rows={5}
></textarea>
            <div className="flex justify-center">
            <button className="flex justify-center bg-dark-green rounded-lg my-[16px] px-14 py-1  mx-11 text-white max-w-lg" type="submit">
              Envoyer
            </button>
            </div>
          </form>
          <div className="bg-green-600 text-white rounded-lg text-center">{message}</div>
          
        </div>
      </div>
  );
};

export default Contact;