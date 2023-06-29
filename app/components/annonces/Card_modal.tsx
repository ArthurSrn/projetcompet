import Image from "next/image";
import Contact from "../Contact";




const CardModal: React.FC = () => {
    return (
        <main className="">
            <section className="bg-white rounded-lg">
                <div className="p-[24px]">
                    <h3 className="text-3xl text-dark-green font-semibold absolute">Envoyer une demande</h3>
                    <p className=" text-center text-grey-pale  mt-14 mb-2">Après avoir cliqué sur "Envoyer", votre demande sera transmise à l'équipe CommBack. Nous vous contacteront pour obtenir plus d'informations concernant votre demande.</p>
                    <div className="grid gap-2">
                        <h4 className="text-xl text-dark-green">Vente local commercial 35m2</h4>
                        <h5 className="text-dark-green">La Ferté-Bernard, Haut de la loire, France</h5>
                        <p className="flex justify-end text-dark-green mb-2 font-semibold max-w-lg">39250 €</p>
                    </div>
                    <Contact />
                </div>

            </section>
        </main>
    );
}

export default CardModal;
