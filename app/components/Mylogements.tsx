"use client"
import React, { useEffect, useState } from "react";
import { fetchLogementData } from "services";
import Image from "next/image";
import Link from "next/link";

interface Logement {
    id: string;
    // Add the necessary properties of your logement data
    title: string;
    superficy: number;
    price: number;
}

export const Search: React.FC<{ handleSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({
    handleSearchTerm,
}) => {
    return (
        <div className="">
            <input
                className="text-white text-xs border rounded-[50px] p-3 mt-[24px] mb-[32px] bg-transparent w-full max-w-lg "
                type="text"
                name="searchbar"
                placeholder="prix.. ville.. surface.."
                onChange={handleSearchTerm}
            />
        </div>
    );
};


export const CardsAnnonce: React.FC<{ logement: Logement[] }> = ({ logement }) => {
    return (
        <div className="flex flex-row">
            {logement.map((val) => (
                <div
                    key={val.id}
                    className="flex,flex-col mr-4 justify-center items-start max-w-[335px] h-[440px]  rounded-[40px] rounded-tr-[116px] bg-white"
                >
                    <Image
                        src="/image_card.png"
                        alt=""
                        className="p-[24px] w-full"
                        width={287}
                        height={187}
                    />
                    <div className="pl-[16px]">
                        <p className="bg-grey-green text-dark-green text-[10px] rounded-full px-[6px] py-[2px] mr-44">
                            Ancienne Boulangerie
                        </p>
                        <div>
                            <p className="text-dark-green">Local {val.superficy}m2</p>
                            <div className="flex flex-row justify-between">
                                <p className="text-xs text-dark-green font-sans">{val.title}</p>
                                <p className="text-dark-green flex justify-end mr-7 mb-[11px]">
                                    {val.price}€
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">
                                Cuisine
                            </span>
                            <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">
                                Trancheur à pain
                            </span>
                            <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">
                                Chambre de fermentation
                            </span>
                        </div>
                        <div className="mt-[16px] flex flex-row">
                            {/* <button className=" text-dark-green mr-[8px]">Voir l'annonce</button> */}
                            <Link className="text-dark-green mr-[8px] flex" href="/dashboard">{"Voir l'\annonce"}
                                <Image
                                    src="/Fleche_droite.svg"
                                    alt=""
                                    className="ml-2"
                                    width="24"
                                    height="24"
                                /></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export const MyLogement: React.FC = () => {
    const [logement, setLogement] = useState<Logement[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const logementData = await fetchLogementData();
            setLogement(logementData);
        };

        fetchData();
    }, []);

    const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setSearchTerm(value.toLowerCase());
    };

    const filteredLogement = logement.filter((val) => {
        const lowerCaseValues = Object.values(val).map((value) => {
            if (typeof value === "string") {
                return value.toLowerCase();
            } else if (typeof value === "object" && value !== null) {
                return Object.values(value).map((nestedValue) => {
                    if (typeof nestedValue === "string") {
                        return nestedValue.toLowerCase();
                    }
                    return nestedValue;
                });
            }
            return value;
        });

        return lowerCaseValues.flat().some((value) => {
            if (typeof value === "string") {
                return value.includes(searchTerm);
            }
            return false;
        });
    });

    return (
        <>
            <Search handleSearchTerm={handleSearchTerm} />
            <CardsAnnonce logement={filteredLogement} />
        </>
    );
};

export default MyLogement;



