import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    imgSrc: string;
    content: string;
    author: string;
    ancien: string;
};

const TestimonialCard = (props: Props) => {
    return (
        <div className="flex,flex-col justify-center items-start max-w-[335px] h-[450px]  rounded-[40px] rounded-tr-[116px] bg-white">
            <Image
                alt={props.author}
                className="p-[20px] w-full"
                width="287"
                height="187"
                src={props.imgSrc}
            />
            <div className="pl-[16px]">
                <p className="bg-grey-green text-dark-green text-[10px] rounded-full px-[6px] py-[2px] mr-48">Ancienne {props.ancien}</p>
                <div>
                    <p className="text-dark-green">Local {props.content}m2</p>
                    <div className="flex flex-row justify-between">
                        <p className="text-xs text-dark-green font-sans" >{props.title}</p>
                        <p className=" text-dark-green flex justify-end mr-7 mb-[11px]">{props.author}€</p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Cuisine</span>
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Chambre de fermentation</span>
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Trancheur à pain</span>
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Toilettes</span>
                </div>
            </div>
        </div>
    );
};
export default TestimonialCard;


export const Cards_search = (props: Props) => {
    return (
        <div className="flex,flex-col justify-center items-start max-w-[335px] h-[450px]  rounded-[40px] rounded-tr-[116px] bg-white">
            <Image
                alt={props.author}
                className="p-[20px] w-full"
                width="287"
                height="187"
                src={props.imgSrc}
            />
            <div className="pl-[16px]">
                <p className="bg-grey-green text-dark-green text-[10px] rounded-full px-[6px] py-[2px] mr-48">Ancienne {props.ancien}</p>
                <div>
                    <p className="text-dark-green">Local {props.content}m2</p>
                    <div className="flex flex-row justify-between">
                        <p className="text-xs text-dark-green font-sans" >{props.title}</p>
                        <p className=" text-dark-green flex justify-end mr-7 mb-[11px]">{props.author}€</p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Cuisine</span>
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Chambre de fermentation</span>
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Trancheur à pain</span>
                    <span className="text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-grey-pale border-grey-pale">Toilettes</span>
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
    );
};


