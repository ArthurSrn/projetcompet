import Image from "next/image";
import BasicModal from "./Modal";

const CardAnnonce: React.FC = () => {
    return (
        <main>
            <div className="flex,flex-col mr-4 justify-center items-start max-w-[330px] h-[350px]  rounded-[28px] rounded-tr-[116px] bg-white">
                <div className="px-[48px]  lg:pr-[60px] pt-[20px] pb-[36px]">
                    <h4 className="text-[24px] mb-[24px]">Local 35m2</h4>
                    <div className="flex flex-row justify-between">
                        <p>Superficie m2</p>
                        <p>35m2</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Prix par m2</p>
                        <p>1121,42€</p>
                    </div>


                    <Image
                        src="/ligne_card.svg"
                        alt=""
                        className="my-[17px]"
                        width={224}
                        height={2}
                    />

                    <div className="flex flex-row justify-between">
                        <p className="">Prix total</p>
                        <p className="mb-[16px]">39250 €</p>
                    </div>

                    <div className="flex flex-row justify-center bg-dark-green px-[24px]  py-[16px] rounded-[16px]">
                        <button className=" text-white mr-[8px]"><BasicModal /></button>
                        <Image
                            src="/lettre.svg"
                            alt=""
                            className=""
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="mt-[8px]">
                        <p className="text-center text-[14px]">nous joindre au :</p>
                        <p className="text-center text-[14px] pb-[28px]">+33 7 82 58 79 28</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CardAnnonce;
