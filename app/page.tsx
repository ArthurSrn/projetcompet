import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between bg-regal-green py-[18.5px] px-6">
        <div className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Commback Logo"
            className="w-auto"
            width="122"
            height="23"
          />
        </div>
        <button className=" bg-dark-green py-2 px-4 rounded"></button>
      </header>

      <section className="flex flex-row items-start mx-[16px] mt-[97px] mb-[64px]">
        <div className="flex flex-col items-start">
          <h2 className="text-4xl text-white font-bold">
            <span className="text-[#5D8083] lg:hidden">ComBack</span> La
            solution Locavore
          </h2>
          <p className=" my-5 text-base text-white">
            Une initiative locavoriste qui facilite la création de commerces
            locaux pour redynamiser les centres-bourgs.
          </p>
          <button className="flex space-x-2 bg-regal-green font-bold p-4 rounded-[20px]">
            Voir plus
            <Image
              src="/FlecheBottom.svg"
              alt="redirection Voir plus"
              className="mx-auto"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div className="flex flex-col items-end w-full">
          <Image
            src="/Group_940.svg"
            alt="Fleche bas"
            className=""
            width="28"
            height="296"
          />
        </div>
      </section>

      <section className="mx-8 mb-20">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text-center mt-8">
            <Image
              src="/30.svg"
              alt="Vercel Logo"
              className="mx-auto"
              width="237"
              height="90"
            />
            <p className=" text-white m-6">
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
            <p className=" text-white m-6">
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
            <p className=" text-white m-6">
              des individus estiment que ces petites surfaces commerciales
              dynamisent le territoire
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <section className="">
          <div className="px-4 py-14">
            <div className="flex items-center justify-start">
              <h3 className="text-4xl font-bold">
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
            <div className="mt-8 flex flex-col items-center">
              <Image
                src="/Concept.svg"
                alt="Vercel Logo"
                className="w-80 md:w-1/3  "
                width="74"
                height="105"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="lg:px-[80px]">
        <div className="px-4 pt-14 pb-28">
          <div className="flex flex-row items-center">
            <h3 className="text-3xl text-[#5D8083] font-bold">
              Rejoignez notre communauté{" "}
              <span className="text-white">de jeunes artisans</span>
            </h3>
            <Image
              src="/Virgule.svg"
              alt="Image titre"
              className="w-auto"
              width="85"
              height="61"
            />
          </div>

          <form className="mt-4 flex flex-col md:flex-row md:flex-wrap">
            <div className="flex flex-col md:flex-row md:space-x-6 w-full">
              <input
                type="text"
                placeholder="Nom Prénom"
                className="border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
              />
              <input
                type="text"
                placeholder="Situation"
                className="border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 w-full">
              <input
                type="tel"
                placeholder="Numéro de téléphone"
                className="border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border rounded-xl p-3 mb-2 bg-transparent max-w-[500px]"
              />
            </div>
            <button
              type="submit"
              className="flex flex-row space-x-2 bg-regal-green font-bold p-4 mt-5 rounded-[20px] w-36"
            >
              Envoyer
              <Image
                src="/Fleche.svg"
                alt="Button Logo"
                className="w-auto"
                width="24"
                height="24"
              />
            </button>
          </form>

          <p className="mt-7 text-[#5D8083]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            consequatur
          </p>
        </div>
      </section>
      <footer className="bg-white py-8 lg:px-20">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Image
              src="/Logo.svg"
              alt="Comback Logo"
              className="w-auto mb-2"
              width="122"
              height="23"
            />
            <p className="text-gray-500 mb-8">
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
