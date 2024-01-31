import React, { useState } from "react";

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className=" bg-black  ">
      <div className="flex justify-between items-center  max-w-5xl mx-auto p-5">
        <div className="flex space-x-2">
          <span className="text-4xl font-bold text-white ">Site</span>
          <span className="text-4xl font-bold text-yellow-300 ">Name</span>
        </div>
        <div className="ml-[300px] md:hidden">
          <button
            className="flex   items-center md:hidden"
            onClick={handleclick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between items-center space-x-8">
            <li>
              <a href="#">
                <span className="font-bold text-yellow-300 text-lg">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="font-bold text-white text-lg">Events</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="font-bold text-white text-lg">Pricing</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="font-bold text-white text-lg">Contact</span>
              </a>
            </li>
          </ul>
        </div>
        {clicked && (
          <div className="block relative md:hidden">
            <ul className="absolute flex  flex-col space-y-9 items-center border  rounded-lg bg-black top-3 p-4 m-4 w-[150px] right-0">
              <li>
                <a href="#">
                  <span className="font-bold text-yellow-300 text-lg">
                    Home
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="font-bold text-white text-lg">Events</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="font-bold text-white text-lg">Pricing</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="font-bold text-white text-lg">Contact</span>
                </a>
              </li>
              <li>
                <button className="text-black font-bold bg-yellow-300 border  px-4 py-2 rounded-lg flex justify-center items-center text-lg  hover:bg-yellow-500 border-none">
                  create
                </button>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden md:flex justify-between items-center space-x-8">
          <button className="text-black font-bold bg-yellow-300 border  px-4 py-2 rounded-lg flex justify-center items-center text-lg  hover:bg-yellow-500 border-none">
            create
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
