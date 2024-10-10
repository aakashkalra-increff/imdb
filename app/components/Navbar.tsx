"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import SortMenu from "./SortMenu";
import ThemeContext from "../contexts/themeContext";
import SearchSvg from "../icons/search.svg";
import CloseSvg from "../icons/close.svg";
import lightThemeSvg from "../icons/light_theme.svg";
import darkThemeSvg from "../icons/dark_theme.svg";
import hamburgerSvg from "../icons/hamburger.svg";
import { MdFormatListBulleted } from "react-icons/md";
import { MdOutlineGridView } from "react-icons/md";

const Navbar = ({
  val,
  handleChange,
  view,
  toggleView,
  handleSortChange,
  toggleSideNav,
}) => {
  const { theme, setTheme } = useContext(ThemeContext) as any;
  const [expanded, setExpanded] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between md:bg-transparent dark:md:bg-transparent bg-white dark:bg-navy">
      <div className="flex items-center flex-1 me-1 md:me-3 ">
        <div className="pl-4 h-14 flex items-center md:hidden">
          <Image
            src={hamburgerSvg}
            className="cursor-pointer me-2 h-5 w-5 md:h-6 md:w-6  color dark:filter-none"
            onClick={toggleSideNav}
            alt="menu icon"
          />
        </div>
        {expanded ? (
          <label className="relative lg:grow-0 grow basis-2/3 transition duration-1000 delay-150">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-4">
              <Image
                className="h-3 w-3 md:h-5 md:w-5 color dark:filter-none"
                src={SearchSvg}
                alt="search icon"
              />
            </span>
            <input
              value={val}
              onChange={(event) => handleChange(event.target.value)}
              className="w-full h-7 md:h-14 rounded-md ps-7 md:ps-11 pe-3 bg-slate-400/20 dark:bg-navy placeholder:text-navy dark:placeholder:text-off-white placeholder-shown:text-truncate text-navy dark:text-white focus:outline-none focus:ring-sky-500 focus:ring-1 h-12"
              placeholder="Title, Movies, Keyword"
            />
            <span className="absolute z-0 inset-y-0 right-4 flex items-center pl-2">
              <Image
                className="h-3 w-3 md:h-5 md:w-5 color dark:filter-none"
                src={CloseSvg}
                alt="close icon"
                onClick={() => {
                  setExpanded(false);
                  handleChange("");
                }}
              />
            </span>
          </label>
        ) : (
          <div className="h-14 pl-2 flex items-center">
            <Image
              className="h-3 w-3 md:h-5 md:w-5 color dark:filter-none"
              src={SearchSvg}
              alt="search icon"
              onClick={() => setExpanded(true)}
            />
          </div>
        )}
      </div>
      <div className={`flex items-center`}>
        <SortMenu handleSortChange={handleSortChange} />
        <Image
          src={theme === "dark" ? lightThemeSvg : darkThemeSvg}
          alt="theme_icon"
          onClick={toggleTheme}
          className="cursor-pointer mx-2 h-4 w-4 md:h-6 md:w-6 color dark:filter-none"
        />
        <span className="hidden md:inline">
          {view === "grid" ? (
            <MdFormatListBulleted
              onClick={toggleView}
              className="cursor-pointer mx-2 h-4 w-4 md:h-6 md:w-6"
            />
          ) : (
            <MdOutlineGridView
              onClick={toggleView}
              className="cursor-pointer mx-2 h-4 w-4 md:h-6 md:w-6"
            />
          )}
        </span>
      </div>
    </div>
  );
};
export default Navbar;
