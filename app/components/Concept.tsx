import Image from "next/image";
export default function Concept() {
    return (
        <main>
            <div className="relative">
                <picture className="flex justify-center">
                    <source className="" width="100%" height="436" srcSet="vertical.svg" media="(max-width: 769px)" />
                    <Image
                        src="/horizontal.svg"
                        alt="Vercel Logo"
                        className="w-full"
                        width="1340"
                        height="249"
                    />
                </picture>
                <div className="flex flex-col md:flex-row text-dark-green ">
                    <p className="absolute top-[8%] text-[4vw] left-[20%] text-left mr-16 md:text-center md:text-[1vw] md:top-[40%] md:left-[8%] md:w-[20%]" >Localiser les différents locaux disponibles en fonction des artisans</p>
                    <p className="absolute top-[42%] text-[4vw] right-[24%] text-right ml-10 md:text-center md:text-[1vw] md:top-[65%] md:right-[40%] md:w-[20%]"> Automatiser la création des dossiers de subventions administratives</p>
                    <p className="absolute top-[75%] text-[4vw] left-[26%] text-left mr-16 md:text-center md:text-[1vw] md:top-[40%] md:left-[70%] md:w-[20%]">Localiser les différents locaux disponibles en fonction des artisans</p>
                </div>
            </div>
        </main >
    );
};
