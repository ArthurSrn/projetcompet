import Image from "next/image";

const CardCafe: React.FC = () => {
    return (
        <main className="flex justify-center">
            <div className="flex flex-col mr-4 justify-center items-start border-double border-[6px] border-dark-green max-w-[227px] h-[219px]  rounded-[26px] rounded-tr-[85px] bg-white">
                <div className="px-[24px] pt-[60px] pb-[38px]">
                    <div className="flex items-center">
                        <div className="flex items-center justify-start mr-4">
                            <Image
                                src="/cafe.png"
                                alt=""
                                className=""
                                width="37"
                                height="37"
                            />
                        </div>
                        <div>
                            <h4 className="text-dark-green">Café</h4>
                            <p className="text-[12px] text-dark-green">La Ferté-Bernard</p>
                        </div>
                    </div>
                    <p className="mt-[16px] text-dark-green">Vous trouverez un café à 200m</p>

                </div>
            </div>
        </main>
    );
}

export default CardCafe;


export const CardEpicerie: React.FC = () => {
    return (
        <main className="flex justify-center">
            <div className="flex flex-col mr-4 justify-center items-start border-double border-[6px] border-dark-green max-w-[227px] h-[219px]  rounded-[26px] rounded-tr-[85px] bg-white">
                <div className="px-[24px] pt-[60px] pb-[38px]">
                    <div className="flex items-center">
                        <div className="flex items-center justify-start mr-4">
                            <Image
                                src="/Epicerie.png"
                                alt=""
                                className=""
                                width="37"
                                height="37"
                            />
                        </div>
                        <div>
                            <h4 className="text-dark-green">Epicerie</h4>
                            <p className="text-[12px] text-dark-green">La Ferté-Bernard</p>
                        </div>
                    </div>
                    <p className="mt-[16px] text-dark-green">Vous trouverez un café à 450m</p>

                </div>
            </div>
        </main>
    );
}


export const CardBoucherie: React.FC = () => {
    return (
        <main className="flex justify-center">
            <div className="flex flex-col mr-4 justify-center items-start border-double border-[6px] border-dark-green max-w-[227px] h-[219px]  rounded-[26px] rounded-tr-[85px] bg-white">
                <div className="px-[24px] pt-[60px] pb-[38px]">
                    <div className="flex items-center">
                        <div className="flex items-center justify-start mr-4">
                            <Image
                                src="/Boucherie.png"
                                alt=""
                                className=""
                                width="37"
                                height="37"
                            />
                        </div>
                        <div>
                            <h4 className="text-dark-green">Boucherie</h4>
                            <p className="text-[12px] text-dark-green">La Ferté-Bernard</p>
                        </div>
                    </div>
                    <p className="mt-[16px] text-dark-green">Vous trouverez un café à 1500m</p>

                </div>
            </div>
        </main>
    );
}


export const CardFromagerie: React.FC = () => {
    return (
        <main className="flex justify-center">
            <div className="flex flex-col mr-4 justify-center items-start border-double border-[6px] border-dark-green max-w-[227px] h-[219px]  rounded-[26px] rounded-tr-[85px] bg-white">
                <div className="px-[24px] pt-[60px] pb-[38px]">
                    <div className="flex items-center">
                        <div className="flex items-center justify-start mr-4">
                            <Image
                                src="/Fromagerie.png"
                                alt=""
                                className=""
                                width="37"
                                height="37"
                            />
                        </div>
                        <div>
                            <h4 className="text-dark-green">Fromagerie</h4>
                            <p className="text-[12px] text-dark-green">La Ferté-Bernard</p>
                        </div>
                    </div>
                    <p className="mt-[16px] text-dark-green">Vous trouverez un café à 550m</p>

                </div>
            </div>
        </main>
    );
}


