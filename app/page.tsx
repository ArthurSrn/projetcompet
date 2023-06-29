import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./components/Burgermenu";
import NewsletterForm from "./components/Newsletter";
import Concept from "./components/Concept";
import QuestionComponent from "./components/Question";
import MyLogement, { Search } from './components/Mylogements';
import Swipper, { Navigateur, SwipperSearch } from "./components/annonces/Proximite_Cards";
import SectionWithBackground from "./components/Video";
import Avis from "./components/Avis";



export default function Home() {
  return (
    <main>
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

        <BurgerMenu />
      </header>

      <section className="flex flex-row items-start mx-[16px] mt-[97px] mb-[64px]">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl text-white font-bold">
            <span className="text-[#5D8083] md:hidden">ComBack</span> La
            solution Locavore
          </h2>
          <p className=" my-5 text-base text-white md:text-lg  font-sans">
            Une initiative locavoriste qui facilite la création de commerces
            locaux pour redynamiser les centres-bourgs.
          </p>
          <button className="flex space-x-2 bg-regal-green font-bold p-4 rounded-[20px] font-sans">
            <Link href={"#concept"}>Voir plus</Link>
            <Image
              src="/FlecheBottom.svg"
              alt="redirection Voir plus"
              className="mx-auto"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div >
          <picture className="flex flex-row justify-between">
            <Image
              src="/IllustrationHome.svg"
              alt="Fleche bas"
              className="hidden lg:block"
              width="552"
              height="345"
            />
            <Image
              src="/Group_940.svg"
              alt="Fleche bas"
              className="mx-2"
              width="31" height="300"
            />
          </picture>
        </div>
      </section>



      <section className="p-0 bg-white" id="concept">
        <div className="px-4 py-14">
          <div className="flex items-center justify-start">
            <h3 className="text-4xl font-bold mb-[32px]">
              <span className="text-grey-title">Le concept</span> Comment ça
              fonctionne ?
            </h3>
            <Image
              src="/Ajout_Titre.svg"
              alt="Vercel Logo"
              className="max-lg:mr-14 "
              width="74"
              height="105"
            />
          </div>
          <div className="relative">
            <Concept />
          </div>
        </div>
      </section>

      <section id="presentation" className="mx-8 mt-32 mb-20 ">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text-center mt-8">
            <Image
              src="/30.svg"
              alt="Vercel Logo"
              className="mx-auto"
              width="237"
              height="90"
            />
            <p className=" text-white m-6 font-sans">
              des petits commerces alimentaires ont disparu des territoires
              ruraux
            </p>
          </div>
          <div className="text-center mt-8">
            <Image
              src="/63.svg"
              alt="Vercel Logo"
              className="mx-auto"
              width="227"
              height="90"
            />
            <p className=" text-white m-6 font-sans">
              des personnes interrogées affirment être prêtes à consommer autant
              de produits locaux que possible afin de soutenir économie
            </p>
          </div>
          <div className="text-center mt-8">
            <Image
              src="/90.svg"
              alt="Vercel Logo"
              className="mx-auto"
              width="235"
              height="90"
            />
            <p className=" text-white m-6 font-sans">
              des individus estiment que ces petites surfaces commerciales
              dynamisent le territoire
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark-green  pl-[16px] md:pl-[80px] pb-[200px] md:pb-[315px]">
        <div className="flex flex-row">
          <h2 className="text-white text-4xl ">Locaux Disponibles !</h2>
          <Image
            src="/Icone_search_Locaux.svg"
            alt=""
            className="mr-20"
            width="60"
            height="58"
          />
        </div>
        <div className="">

          <SwipperSearch />
        </div>




        <div className="mt-[55px]">
          <div className="flex justify-center items-center">
            <span className=" font-sans text-xs m-1 lflex  py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl ">Voir plus</span>
            <span className=" font-sans text-xs m-1  py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl ">Café</span>
          </div>
          <div className="flex justify-center items-center">
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl ">Poissonerie</span>
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl ">Epicerie</span>
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl">Glacier</span>
          </div>
          <div className="flex justify-center items-center">
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl">Boucherie</span>
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl">Pâtisserie</span>
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl">Restaurant</span>
          </div>
          <div className="flex justify-center items-center">
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl">Fromagerie</span>
            <span className=" font-sans text-xs m-1 py-[4px] px-[16px] rounded-[50px] border-solid  border-[1px] text-white border-grey-pale sm:text-sm md:text-base lg:text-lg xl:text-xl">Boulangerie</span>
          </div>
        </div>
      </section>

      <section className="relative ">
        <div className="absolute inset-1 flex flex-col justify-center items-center top-[-95px]">
          <h4 className="text-white text-[32px] ">Titre de la video</h4>
          <video
            className="w-full sm:w-1/2 px-[24px] rounded-[60px]"
            src="Explainer.mp4"
            controls
          ></video>
        </div>
      </section>
      <section className="bg-regal-green text-dark-green pt-[155px] pb-[64px] lg:pt-[290px]">
        <Navigateur />
      </section>


      <section className="bg-white">
        <QuestionComponent />
      </section>

      <section id="formulaire" className="lg:px-[80px]">
        <div className="px-4 pt-14 pb-28">
          <div className="flex flex-row items-center">
            <h3 className="text-3xl text-[#5D8083] font-bold">
              Vous souhaitez{" "}
              <span className="text-white">vous lancer ?</span>
            </h3>

            <Image
              src="/FlecheNewsletter.svg"
              alt="Image Newsletter"
              className="w-auto lg:mr-96"
              width="162" height="123"
            />
          </div>
          <p className="text-white md:mr-[400px] mb-[36px] font-sans">Ne manquez plus aucune nouveauté ! Abonnez-vous à notre newsletter et restez à l'affût des informations passionnantes.</p>
          <div className="relative">
            <div className=" absolute flex justify-end right-[-68px] bottom-[-180px]">
              <Image
                src="/Newsletter.svg"
                alt="Image titre"
                className="w-auto hidden lg:block"
                width="374" height="342"
              />
            </div>
          </div>

          <NewsletterForm />
          <div className="flex items-center space-x-4">
            <input type="checkbox" className=" form-checkbox text-indigo-600 h-5 w-5" />
            <p className="mt-7 text-white font-sans">
              En soumettant ce formulaire, j'accepte que les informations saisies
              soient traitées par CommBack dans le cadre de ma demande de contact
              et de la relation commerciale qui peut en découler. En savoir plus
              en consultant notre politique de confidentialité.
            </p>


          </div>

        </div>
      </section>
      <footer className="bg-white py-8 lg:px-20">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Image
              src="/Logo_Commback.svg"
              alt="Comback Logo"
              className="w-auto mb-2"
              width="122"
              height="23"
            />
            <p className="text-gray-500 mb-8 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              justo ut velit tincidunt placerat.
            </p>
            <div className="flex flex-row justify-start items-center sm:items-start sm:flex-row gap-4">
              <div>
                <Link href={"https://www.instagram.com/commback_off/"}>
                  <Image
                    src="/Instagram.svg"
                    alt="Instagram Logo"
                    className="w-auto"
                    width="24"
                    height="24"
                  />
                </Link>
              </div>
              <div>
                <Link href={"https://www.linkedin.com/company/commback/"}>
                  <Image
                    src="/linkedin.svg"
                    alt="Linkedin logo"
                    className="w-auto"
                    width="24"
                    height="23"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href={
                    "https://www.tiktok.com/@commback_off?is_from_webapp=1&sender_device=pc"
                  }
                >
                  <Image
                    src="/Tiktok.svg"
                    alt="Tiktok Logo"
                    className="w-auto"
                    width="24"
                    height="24"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
  // container : {
  //   center : true
  //   padding : 2rem
  // }
}
