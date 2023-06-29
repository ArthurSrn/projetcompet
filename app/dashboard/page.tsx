// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
"use client"
import Image from "next/image";
import BurgerMenu from "../components/Burgermenu";
import CardAnnonce from "../components/annonces/Cards_annonce";
import Swipper, { SwipperSearch, SwipperSearchAnnonce } from "../components/annonces/Proximite_Cards";

import React, { useEffect, useState } from "react";

import Slider from "../components/Slider";
import TestimonialCard from "../components/TestimonialCard";
import testimonials from "../data/testimonials.json";
import Link from "next/link";
import BasicModal from "../components/annonces/Modal";
import Contact from "../components/Contact";
import "../styles.css";



export default function Page() {
    return <>


        <header className="flex items-center justify-between bg-regal-green py-[18.5px] px-6">
            <div className="flex items-center">
                <Link href={"/"}>
                    <Image
                        src="/Logo_Commback.svg"
                        alt="Commback Logo"
                        className="w-auto"
                        width="141"
                        height="25"
                    /></Link>
            </div>
            <div className="flex  items-center"> <Link className="hidden md:block" href="/"><span className="mr-12 text-xl text-dark-green ">Accueil</span></Link>

                <BurgerMenu /></div>
        </header>
        <Link className="" href="/">
            <Image
                src="/fleche_retour.svg"
                alt="image ville"
                className="m-[32px] md:hidden "
                width="28"
                height="26"
            /></Link>
        <section>
            <h3 className="text-[40px] text-white mt-[80px] ml-[32px]">Vente local commercial 35m2</h3>
            <h5 className="underline decoration-1 text-white ml-[32px] mb-[55px]">La Ferte-Bernard, Haut de Loire, France</h5>
            <div className=" lg:flex lg:flex-row lg:justify-around">
                <div className="px-[24px]  grid gap-4 lg:mb-11">
                    <Image
                        src="/image_annonce.png"
                        alt="image ville"
                        className="w-full"
                        width="343"
                        height="234"
                    />
                    <div className="flex space-x-7">
                        <Image
                            src="/image_annonce.png"
                            alt="image ville"
                            className="hidden lg:block"
                            width="343"
                            height="234"
                        />
                        <Image
                            src="/image_annonce.png"
                            alt="image ville"
                            className="hidden lg:block"
                            width="343"
                            height="234"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-[77px] mb-[68px]">
                    <CardAnnonce />
                </div>
            </div>
        </section>

        <section className="bg-white pl-[32px]">

            <h4 className="text-[32px] pt-[52px] mb-[24px] text-dark-green">Equipements</h4>
            <div className="flex flex-wrap">
                <div className=" flex flex-row text-[18px] m-1 py-[4px] px-[19px] rounded-[50px] border-solid  border-[1px] text-dark-green border-dark-green">
                    <Image
                        src="/équipement_cuisine.svg"
                        alt="image ville"
                        className=""
                        width="34" height="34"
                    />
                    <span className="flex ml-[13px] items-center">Cuisine</span>

                </div>
                <div className=" flex flex-row text-[18px] m-1 py-[4px] px-[19px] rounded-[50px] border-solid  border-[1px] text-dark-green border-dark-green">
                    <Image
                        src="/équipement_frigo.svg"
                        alt="image ville"
                        className=""
                        width="34" height="34"
                    />
                    <span className="flex ml-[13px] items-center">Laminoir</span>

                </div>
                <div className=" flex flex-row text-[18px] m-1 py-[4px] px-[19px] rounded-[50px] border-solid  border-[1px] text-dark-green border-dark-green">
                    <Image
                        src="/équipement_four.svg"
                        alt="image ville"
                        className=""
                        width="34" height="34"
                    />
                    <span className="flex ml-[13px] items-center">Four à pain</span>

                </div>
                <div className=" flex flex-row text-[18px] m-1 py-[4px] px-[19px] rounded-[50px] border-solid  border-[1px] text-dark-green border-dark-green">
                    <Image
                        src="/équipement_laminoir.svg"
                        alt="image ville"
                        className=""
                        width="34" height="34"
                    />
                    <span className="flex ml-[13px] items-center">Frigo</span>
                </div>
            </div>
            <h4 className="text-[32px] text-dark-green mb-[24px] mt-[55px]">Description</h4>
            <p className="text-dark-green mb-[18px] mr-4">Local vide de 35 mètres carrés à la Ferté-Bernard, ancienne boulangerie avec quelques équipements restants. Ce local offre une opportunité idéale pour démarrer votre propre commerce dans un emplacement central. Situé dans un quartier animé, il bénéficie d'un fort passage piétonnier et d'une visibilité accrue.</p>
            <p className="text-dark-green mb-[18px] mr-4">Le local, anciennement une boulangerie, est équipé de certains éléments qui peuvent être adaptés à d'autres types de commerces. Vous y trouverez un four à pain, un pétrin, une diviseuse-bouleuse et d'autres équipements de base de boulangerie, qui pourraient être utilisés ou retirés selon vos besoins.</p>
            <p className="text-dark-green mb-[18px] mr-4">Avec une superficie de 35 mètres carrés, ce local offre suffisamment d'espace pour créer une atmosphère accueillante et fonctionnelle pour votre activité. Les grandes vitrines à l'avant permettent d'exposer vos produits ou services et d'attirer l'attention des passants.</p>
            <p className="text-dark-green mb-[18px] mr-4">Que vous envisagiez d'ouvrir une boulangerie, une pâtisserie, un salon de thé ou tout autre type de commerce, ce local polyvalent offre de nombreuses possibilités d'aménagement pour répondre à vos besoins spécifiques.</p>
            <p className="text-dark-green  mr-4">Ne manquez pas cette occasion de concrétiser votre projet commercial dans ce local bien situé et prêt à être adapté selon vos aspirations. Contactez-nous dès maintenant pour planifier une visite et discuter des modalités de location.</p>
        </section>
        <section className="bg-white">
            <h4 className="text-[30px] text-dark-green ml-[32px] pt-[40px] mb-[24px]">Circulation du quartier</h4>
            <div className="flex flex-wrap ml-[32px]">
                <div className=" flex flex-row text-[18px] m-1 py-[4px] px-[19px] rounded-[50px] border-solid  border-[1px] text-dark-green border-dark-green">
                    <Image
                        src="/pieton.svg"
                        alt="image ville"
                        className=""
                        width="34" height="34"
                    />
                    <span className="flex ml-[13px] items-center">Régulière</span>
                </div>
                <div className=" flex flex-row text-[18px] m-1 py-[4px] px-[19px] rounded-[50px] border-solid  border-[1px] text-dark-green border-dark-green">
                    <Image
                        src="/voiture.svg"
                        alt="image ville"
                        className=""
                        width="34" height="34"
                    />
                    <span className="flex ml-[13px] items-center">Régulière</span>
                </div>
            </div>

            <h4 className="text-[30px] text-dark-green ml-[32px] mt-[40px] mb-[24px]">A proximité</h4>
            <div className="pb-[72px]">
                <div><Swipper /></div>

            </div>
        </section>


        <section>
            <SwipperSearchAnnonce />
        </section>

        <section className="bg-dark-green ">
            <div className="relative">
                <h4 className="absolute z-20 text-white text-[32px]  top-[65px] ml-[32px]">Annonces similaires</h4>
                <Image
                    src="/tache.svg"
                    alt="image ville"
                    className="absolute z-10 right-[18px] top-[60px]"
                    width="67" height="66"
                />
            </div>
            <div className=" pt-[140px]">
                <Slider options={{ align: "center" }}>
                    {testimonials.map((testimonial, i) => (
                        // 2. flex-[0_0_50%] set the width of each card to 50% of the viewport
                        // for mobile devices we use 90% width
                        <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>




        <div className="mt-[84px] flex justify-center">
            <Image
                src="/ligne_footer.svg"
                alt="Comback Logo"
                className="w-2/3"
                width="326"
                height="2"
            />
        </div>
        <footer className="bg-dark-green py-8 lg:px-20 ml-[24px]">
            <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl ">
                    <Image
                        src="/Logo_blanc.svg"
                        alt="Comback Logo"
                        className="w-1/3 mb-[45px]"
                        width="219"
                        height="38"
                    />
                    <p className="text-white mb-8 font-sans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
                        justo ut velit tincidunt placerat.
                    </p>
                    <div className="flex flex-row justify-start items-center sm:items-start sm:flex-row gap-4">
                        <div>
                            <Link href={"https://www.instagram.com/commback_off/"}>
                                <Image
                                    src="/Instagram_blanc.svg"
                                    alt="Instagram Logo"
                                    className=""
                                    width="24"
                                    height="25"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href={"https://www.linkedin.com/company/commback/"}>
                                <Image
                                    src="/linkedin_blanc.svg"
                                    alt="Linkedin logo"
                                    className="w-auto"
                                    width="24"
                                    height="24"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={
                                    "https://www.tiktok.com/@commback_off?is_from_webapp=1&sender_device=pc"
                                }
                            >

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
