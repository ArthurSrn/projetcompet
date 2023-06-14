
import Image from "next/image";

export default function ButtonForm (){
    <main>
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
    </main>
} 
    
