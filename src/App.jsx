import { useState } from "react";
import avatar from "./assets/avatar.png";

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") ? localStorage.getItem("darkMode") : "dark"
  );
  const handdleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} `}>
      <div
        className={`min-h-screen min-w-screen bg-mobileLight dark:text-white text-black dark:bg-mobileDark bg-center bg-no-repeat bg-cover flex justify-center items-center`}
      >
        <div className="w-[360px] mt-14">
          <div className="p-6" id="#avatar">
            <img
              src={avatar}
              alt="Imagem do avatar"
              className="w-[112px] block m-auto p-2"
            />
            <p className="text-center text-lg font-medium">Caio Martins</p>
          </div>
          <div
            id="switch"
            onClick={handdleDarkMode}
            className="relative h-8 w-16 flex items-center m-auto cursor-pointer justify-center "
          >
            {/* <div className="absolute border-[8px] z-10 rounded-full -top-1 -left-1 dark:left-auto dark:-right-1  w-10 h-10 hover:dark:border-[#FFFFFF33] hover:border-[#00000033]"></div> */}
            <button className=" absolute z-20 top-0 left-0  transition duration-[0.3s] dark:translate-x-full w-8 h-8 bg-no-repeat bg-center bg-white dark:bg-switchDark  rounded-full bg-switchLight"></button>
            <span className="w-16 h-6 block absolute  dark:bg-[rgba(255,255,255,0.1)] border border-[rgba(0,0,0,0.5)] dark:border-[rgba(255,255,255,0.5)] backdrop-blur-sm rounded-full"></span>
          </div>
          <ul className="p-6 gap-2 flex flex-col " id="projetos">
            <li className="flex justify-center items-center btn-link dark:btn-link ">
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="px-6 py-4 font-medium "
              >
                Portfólio
              </a>
            </li>
            <li className="flex justify-center items-center btn-link dark:btn-link">
              <a
                href="https://github.com/CaioMMendes/Learning-with-git"
                rel="noreferrer"
                target="_blank"
                className="px-6 py-4 font-medium"
              >
                Projeto Learning
              </a>
            </li>
            <li className="flex justify-center items-center btn-link dark:btn-link">
              <a
                href="https://github.com/CaioMMendes/Servidor-node-mysql"
                rel="noreferrer"
                target="_blank"
                className="px-6 py-4 font-medium"
              >
                Servidor com node/mysql
              </a>
            </li>
          </ul>
          <div
            className="flex justify-center items-center px-6 pt-2 pb-6 "
            id="socialLinks"
          >
            <a
              href="https://github.com/CaioMMendes"
              target="_blank"
              rel="noreferrer"
              className="dark:hover:bg-[#ffffff33] hover:bg-[rgba(0,0,0,0.1)] p-4  rounded-full flex items-center justify-center transition-[background] duration-[.3s]"
            >
              <AiOutlineGithub className="text-2xl" />{" "}
            </a>
            <a
              href="https://www.instagram.com/caiiommr/"
              target="_blank"
              rel="noreferrer"
              className="dark:hover:bg-[#ffffff33] hover:bg-[rgba(0,0,0,0.1)] p-4  rounded-full flex items-center justify-center transition-[background] duration-[.3s]"
            >
              <AiOutlineInstagram className="text-2xl" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/caio-mendes-2aa971273/"
              target="_blank"
              rel="noreferrer"
              className="dark:hover:bg-[#ffffff33] hover:bg-[rgba(0,0,0,0.1)] p-4  rounded-full flex items-center justify-center transition-[background] duration-[.3s]"
            >
              <AiOutlineLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/CaioMendes13/"
              rel="noreferrer"
              target="_blank"
              className="dark:hover:bg-[#ffffff33] hover:bg-[rgba(0,0,0,0.1)] p-4  rounded-full flex items-center justify-center transition-[background] duration-[.3s]"
            >
              <AiOutlineFacebook className="text-2xl  " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
