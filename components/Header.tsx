import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between p-5 sticky bg-white z-50 shadow-md">
      {/* left div */}
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="chatgpt logo"
          height={30}
          width={30}
        />

        <div>
          <h1 className="font-bold">
            The PAPAFAM <span className="text-violet-500">AI</span> Image
            Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL.E 2, ChatGPT & Microsoft Azure!
          </h2>
        </div>
      </div>

      {/* right div */}

      <div className="flex text-xs md:text-base divide-x items-center">
        <Link
          className="px-2 font-light text-right"
          href="https://www.paypal.com/donate/?hosted_button_id=EP9QZE5L8ELAL">
          Buy me a coffee
        </Link>
        <Link
          href="https://github.com/TahaHammouz/Image-Generator"
          className="px-2 font-light">
          Github Repo
        </Link>
      </div>
    </div>
  );
};

export default Header;
