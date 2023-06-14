"use client"
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  telephone: z.string(),
});

type NewsletterFormInputs = z.infer<typeof schema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<NewsletterFormInputs> = async (data) => {
    console.log(JSON.stringify(data));
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      const result = await res.json();

      console.log(result);

      if (!res.ok) {
        throw new Error(
          "Une erreur s'est produite lors de la demande à l'API."
        );
      }

      const responseJson = await res.json();
      console.log("Réponse de l'API :", responseJson);

      reset();
    } catch (error) {
      console.error("Erreur lors de la demande à l'API :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col md:flex-row md:flex-wrap">
      <div className="flex flex-col md:space-x-6 w-full">
        <input
          type="email"
          placeholder="Adresse e-mail"
          className=" text-white border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">Entrer une adresse e-mail valide</p>}
      </div>

      <div className="flex flex-col md:space-x-6 w-full">
        <input
          className=" text-white border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
          type="text"
          placeholder="Nom"
          {...register("firstName")}
        />
        {errors.firstName && <p>Entrer un nom valide</p>}
      </div>


      <div className="flex flex-col  md:space-x-6 w-full">
        <input
          className=" text-white border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
          type="text"
          placeholder="Prénom"
          {...register("lastName")}
        />
        {errors.lastName && <p>Entrer un prénom valide</p>}
      </div>

      <div className="flex flex-col md:space-x-6 w-full">
        <input
          className=" text-white border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
          type="tel"
          placeholder="Téléphone"
          {...register("telephone")}
        />
        {errors.telephone && <p>Entrer un numéro de téléphone valide</p>}
      </div>

      <button
        type="submit"
        className="flex flex-row space-x-2 bg-regal-green font-bold p-4 mt-5 rounded-[20px] w-36"
      >
        Envoyer
        <Image
          src="/Fleche.svg"
          alt="Button Logo"
          className="w-auto"
          width="24"
          height="24"
        />
      </button>
    </form>
  );
}
