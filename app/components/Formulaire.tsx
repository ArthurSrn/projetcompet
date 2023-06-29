"use client"
import { ChangeEvent, useState } from "react";

type FormData = {
    email: string;
    firstName: string;
    lastName: string;
    telephone: string;
    agree: boolean;
};

export default function MyForm() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        firstName: "",
        lastName: "",
        telephone: "",
        agree: false,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.email && formData.firstName && formData.lastName && formData.telephone && formData.agree) {
            try {
                // Form is valid, do something with the data (e.g., submit the form)
                console.log("Form submitted:", formData);
                setFormData({
                    email: "",
                    firstName: "",
                    lastName: "",
                    telephone: "",
                    agree: false,
                });

                // Simulate an API request
                await new Promise((resolve) => setTimeout(resolve, 2000));

                // Display alert after successful request
                alert("Requête envoyée avec succès !");
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
                alert("Une erreur s'est produite lors de la requête.");
            }
        } else {
            // Form is not valid, show error or prevent form submission
            console.log("Form is not valid");
        }
    };

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Adresse e-mail:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Nom:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Prénom:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Téléphone:
                    <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                    J accepte les conditions.
                </label>
            </div>
            <button type="submit" disabled={!formData.agree}>
                Envoyer
            </button>
        </form>
    );
}
