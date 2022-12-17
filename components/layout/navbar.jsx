import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/images/beefy-logo.jpg";
import { useRouter } from "next/router";
import Opensea from "../../public/images/opensea.jpg";
import Menu from "../../public/images/menu.jpg";
import CloseMenu from "../../public/images/close.jpg";
import Logo_nav from "../../public/images/Logo_nav.png";

const NavBar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const links = {
    home: {
      name: "Home",
      link: "/",
    },
    team: {
      name: "Team",
      link: "/team",
    },
    faq: {
      name: "FAQ's",
      link: "/faq",
    },
    about: {
      name: "About Us",
      link: "/about",
    },
    twitter: {
      name: "Twitter",
      link: "https://google.com",
    },

    discord: {
      name: "Discord",
      link: "https://google.com",
    },
    opensea: {
      name: "Opensea",
      link: "https://google.com",
    },
  };

  return (
    <>
      <nav
        className={`h-40 w-full flex justify-center fixed z-[9999] transition-all duration-300 items-center flex-row bg-white`}
      >
        <div className="w-[120px] ml-[30px]  xl:ml-[100px] cursor-pointer flex-shrink-0">
          <div>
            <Link href={links.home.link}>
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="w-full flex h-full pl-20 items-center justify-start flex-row">
          <ul className=" text-black flex-row space-x-8 hidden xl:flex">
            <li className="text-[20px] cursor-pointer relative flex justify-center group">
              <Link href={links.team.link}>{links.team.name}</Link>
              <span
                className={`h-[1px] bg-black absolute bottom-0 transition-all duration-300 origin-left ${
                  router.pathname === links.team.link
                    ? "w-[100%]"
                    : "w-[0%] group-hover:w-[100%]"
                }`}
              ></span>
            </li>
            <li className="text-[20px] cursor-pointer relative flex justify-center group">
              <Link href={links.faq.link}>{links.faq.name}</Link>
              <span
                className={`h-[1px] bg-black absolute bottom-0 transition-all duration-300 origin-left ${
                  router.pathname === links.faq.link
                    ? "w-[100%]"
                    : "w-[0%] group-hover:w-[100%]"
                }`}
              ></span>
            </li>
            <li className="text-[20px] cursor-pointer relative flex justify-center group">
              <Link href={links.about.link}>{links.about.name}</Link>
              <span
                className={`h-[1px] bg-black absolute bottom-0 transition-all duration-300 origin-left ${
                  router.pathname === links.about.link
                    ? "w-[100%]"
                    : "w-[0%] group-hover:w-[100%]"
                }`}
              ></span>
            </li>
            <li className="text-[20px] cursor-pointer relative flex justify-center group">
              <Link href={links.twitter.link}>{links.twitter.name}</Link>
              <span
                className={`h-[1px] bg-black absolute bottom-0 transition-all duration-300 origin-left w-[0%] group-hover:w-[100%]
                `}
              ></span>
            </li>
            <li className="text-[20px] cursor-pointer group relative flex justify-center group">
              <Link href={links.discord.link}>{links.discord.name}</Link>
              <span
                className={`h-[1px] bg-black absolute bottom-0 transition-all duration-300 origin-left w-[0%] group-hover:w-[100%]
                `}
              ></span>
            </li>
          </ul>

          <div
            className={`h-full w-full ${
              isOpen ? "left-0" : "left-[-100%]"
            } fixed transition-all duration-500 z-[9999] top-0 xl:hidden justify-start items-center flex overflow-hidden`}
          >
            <div className="w-[80%] gradient h-screen relative rounded-r-3xl">
              <button
                onClick={() => setIsOpen(false)}
                className={` bg-white absolute right-[-20px] top-40 h-[40px] w-[40px]`}
              >
                <Image fill src={CloseMenu} alt="menuicon" />
              </button>
              <div className="pl-10 top-40 relative">
                <Link href={links.home.link}>
                  <Image src={Logo_nav} alt="Logo" />
                </Link>
              </div>
              <ul className="flex justify-center items-start w-full h-full flex-col xl:hidden pl-10 pr-10">
                <Link href={links.team.link} className="w-full group py-2">
                  <li
                    className={`nav text-white py-4 rounded-2xl text-[20px] group-hover:bg-gray-100 group-hover:text-gray-900 duration-300   pl-5 ${
                      router.pathname == links.team.link
                        ? "bg-white text-black w-full "
                        : ""
                    }`}
                  >
                    {links.team.name}
                  </li>
                </Link>
                <Link href={links.faq.link} className="w-full group py-2">
                  <li
                    className={`nav text-white py-4 rounded-2xl text-[20px] group-hover:bg-gray-100 group-hover:text-gray-900 duration-300  pl-5 ${
                      router.pathname == links.faq.link
                        ? "bg-white text-black w-full "
                        : ""
                    }`}
                  >
                    {links.faq.name}
                  </li>
                </Link>
                <Link href={links.about.link} className="w-full group py-2">
                  <li
                    className={`nav text-white py-4 text-[20px]  rounded-2xl group-hover:bg-gray-100 group-hover:text-gray-900 duration-300  pl-5 ${
                      router.pathname == links.about.link
                        ? "bg-white text-black w-full "
                        : ""
                    }`}
                  >
                    {links.about.name}
                  </li>
                </Link>
                <Link href={links.twitter.link} className="w-full group py-2">
                  <li
                    className={`nav text-white py-4 rounded-2xl text-[20px] group-hover:bg-gray-100 group-hover:text-gray-900 duration-300  pl-5 ${
                      router.pathname == links.twitter.link
                        ? "bg-white text-black w-full "
                        : ""
                    }`}
                  >
                    {links.twitter.name}
                  </li>
                </Link>
                <Link href={links.discord.link} className="w-full group py-2">
                  <li
                    className={`nav text-white py-4 rounded-2xl text-[20px] group-hover:bg-gray-100 group-hover:text-gray-900 pl-5 ${
                      router.pathname == links.discord.link
                        ? "bg-white text-black w-full "
                        : ""
                    }`}
                  >
                    {links.discord.name}
                  </li>
                </Link>
                <Link className="sm:hidden group w-full py-2" href={links.opensea.link}>
                  <li className="nav text-white py-4 rounded-2xl text-[20px] group-hover:bg-gray-100 group-hover:text-gray-900 pl-5">
                    {links.opensea.name}
                  </li>
                </Link>
              </ul>
              <button className="text-black bg-white  hover:bg-black hover:text-white active:bg-gray-700 duration-300 py-4 w-[90%] ml-[5%]  absolute bottom-5 rounded-[20px] whitespace-nowrap text-[20px]">
                Connect wallet
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`fixed bg-white h-[40px] right-[30px] w-[40px] z-5o xl:hidden mr-[30px]`}
          >
            <Image fill src={Menu} alt="menuicon" />
          </button>
        </div>
        <div className="pr-[130px] hidden sm:flex w-max flex-row justify-center items-center space-x-4">
          <div className="w-16 aspect-square relative outline-2 outline-red-500">
            <Image src={Opensea} className="z-10" fill alt="Opensea" />
          </div>
          <button className="text-black border-[1.5px] hover:bg-black hover:text-white active:bg-gray-700 transition-color duration-300 border-black bg-white px-5 py-2 w-full rounded-full whitespace-nowrap nav">
            Connect wallet
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
