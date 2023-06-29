import Image from 'next/image';

const Avis = () => {
    return (
        <div className="flex flex-col mx-[32px] rounded-[20px] px-[40px] md:px-[160px] py-[64px] bg-white">
            <div>
                <Image
                    src="/quote.svg"
                    alt=""
                    className=""
                    width="46"
                    height="32"
                />
                <div className="md:ml-[45px]">
                    <h2 className="text-4xl my-[8px]">Ils nous font confiance</h2>
                    <Image
                        src="/surligne.svg"
                        alt=""
                        className=""
                        width="177"
                        height="6"
                    />
                </div>
            </div>

            <p className="mt-[40px] mb-[24px] md:ml-[45px] md:text-left text-center font-sans">En tant que boulangerie artisanale, nous avons trouvé cette location de local idéale pour notre activité. L'espace offrait suffisamment de place pour nos fours, pétrins et autres équipements nécessaires à la production de pains et de pâtisseries. De plus, le local était facilement accessible pour les clients qui souhaitaient acheter nos produits. Nous sommes très satisfaits de cette location et nous la recommandons vivement aux autres métiers de bouche dans le village</p>

            <div className="flex flex-row">
                <Image
                    src="/Logo_profil.svg"
                    alt=""
                    className=""
                    width="50"
                    height="60"
                />
                <span className="ml-[16px]">Mandana Riche</span>

                <div className="ml-[32px]">
                    <h4 className="text-xs">Vice-président</h4>
                    <span className="">Talent.io</span>
                </div>
            </div>
        </div>

    );
};

export default Avis;
