import React from "react";

export default function Navbar({ changeOption }) {
  return (
    <>
      <div className=" h-full shadow-md bg-black text-white absolute w-20 md:w-60 overflow-hidden">
        <div className="pt-4 pb-2 px-6">
          <div className="flex flex-col items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              viewBox="0 0 512 512"
            >
              <path
                fill="#231f20"
                d="M224.38,455.76a205,205,0,0,0,231.9-231.9Z"
              ></path>
              <path
                fill="#231f20"
                d="M282.37,50a205,205,0,0,0-231.9,231.9Z"
              ></path>
              <path
                fill="#231f20"
                d="M424.38,139.82a206.55,206.55,0,0,0-58-58l-284,284a206.9,206.9,0,0,0,58,58Z"
              ></path>
            </svg> */}

            <div
              onClick={() => {
                changeOption(1);
              }}
              className=" md:hidden flex items-center justify-center w-16 h-16 text-3xl text-white text-center mt-5 hover:bg-white hover:text-black font-bold rounded-full px-2 cursor-pointer active:scale-90 transition-all ease-in-out"
            >
              N
            </div>
            <div
              className="md:block hidden hover:scale-105 shrink-0 w-3/4 cursor-pointer active:scale-90 transition-all ease-in-out"
              onClick={() => {
                changeOption(1);
              }}
            >
              <img
                src="https://pps.whatsapp.net/v/t61.24694-24/254357262_905156386776666_5358073800859678610_n.jpg?ccb=11-4&oh=7577d8939e0fff80249ffe598fc367ed&oe=6233AA00"
                className=" avatar w-full"
                alt="Avatar"
              />
            </div>
            <div className="grow ml-3">
              <p className="md:block hidden pt-2 text-xl text-center  font-bold">
                Nombre member
              </p>
            </div>
          </div>
        </div>
        <hr className="block my-3 md:hidden md:my-0" />
        <div className=" hidden relative md:flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Member</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <ul className="relative px-1">
          <li className="relative">
            <button
              className=" link-navbar"
              onClick={() => {
                changeOption(2);
              }}
            >
              <svg
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"
                />
              </svg>
              <span className="pt-1 text-sm font-semibold hidden md:inline">
                Mis Feeedback
              </span>
            </button>
          </li>
          <li className="relative">
            <button
              className="link-navbar"
              onClick={() => {
                changeOption(3);
              }}
            >
              <svg
                className="w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                />
              </svg>
              <span className="pt-1 text-sm font-semibold hidden md:inline">
                Asignar compañeros
              </span>
            </button>
          </li>
          <li className="relative">
            <button
              className="link-navbar"
              onClick={() => {
                changeOption(4);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"
                />
                <path
                  fill="currentColor"
                  d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"
                />
              </svg>
              <span className="pt-1 text-sm font-semibold hidden md:inline">
                Evaluar compañeros
              </span>
            </button>
          </li>
        </ul>

        <div className="hidden md:flex relative py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Assistant</span>

          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <hr className="block my-3 md:hidden md:my-0" />
        <ul className="relative px-1">
          <li className="relative">
            <button
              className="link-navbar"
              onClick={() => {
                changeOption(5);
              }}
            >
              <svg
                className="w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                />
              </svg>
              <span className="pt-1 text-sm font-semibold hidden md:inline">
                {" "}
                Member&apos;s Asignados
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
