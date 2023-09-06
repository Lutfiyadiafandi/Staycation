import React, { useState } from "react";
import BrandIcon from "../atoms/BrandIcon";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    {
      id: 1,
      link: "home",
      path: "/",
      icon: "M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9",
    },
    {
      id: 2,
      link: "browse by",
      path: "/",
      icon: "m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z",
    },
    {
      id: 3,
      link: "stories",
      path: "/",
      icon: "M7 6V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Zm0 0v3a4 4 0 0 1-4 4H2m15-7V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Zm0 0v3a4 4 0 0 1-4 4h-1",
    },
    {
      id: 4,
      link: "agents",
      path: "/",
      icon: "M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z",
    },
  ];
  return (
    <header className="fixed top-20 md:top-[79px] z-50 left-0 right-0 border-b border-[#E5E5E5]">
      <nav className="px-5 md:px-10 max-w-screen-at mx-auto xl:px-0 bg-white right-0 fixed top-0 left-0 flex items-center justify-between py-5 z-50">
        <BrandIcon />

        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <ul className="md:flex hidden items-center gap-10">
          {nav.map((item) => (
            <li
              key={item.id}
              className="font-normal capitalize text-secondary text-detail2 hover:underline"
            >
              <NavLink to={item.path}>{item.link}</NavLink>
            </li>
          ))}
        </ul>

        <ul
          className={`
        md:hidden bg-white z-50 fixed w-full top-[81px] overflow-y-auto bottom-0 py-5 px-5
        duration-500 ${isOpen ? "left-0" : "left-[-100%]"}
        `}
        >
          {nav.map((item) => (
            <li
              key={item.id}
              className="flex gap-5 items-center py-3 font-normal capitalize text-secondary text-detail2 hover:underline"
            >
              <svg
                className="w-[24px] h-[24px] text-grey"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={item.icon}
                />
              </svg>
              <NavLink to={item.path}>{item.link}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
