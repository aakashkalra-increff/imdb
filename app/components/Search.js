"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import SortMenu from "./SortMenu";
import ThemeContext from "../contexts/themeContext";
import SearchSvg from "../icons/search.svg";
import CloseSvg from "../icons/close.svg";
import lightThemeSvg from "../icons/light_theme.svg";
import darkThemeSvg from "../icons/dark_theme.svg";
import kebabMenuSvg from "../icons/kebab_menu.svg";
import gridSvg from "../icons/grid.svg";

const Search = ({ val, handleChange, view, toggleView, handleSortChange }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between">
      {expanded ? (
        <label className="relative w-1/2 transition duration-1000 delay-150">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Image
              className="h-5 w-5 fill-slate-300 text-off-white"
              src={SearchSvg}
              alt="search icon"
            />
          </span>
          <input
            value={val}
            onChange={(event) => handleChange(event.target.value)}
            className="w-full h-14 rounded-md ps-11 pe-3 bg-nav placeholder:text-off-white text-white focus:outline-none focus:ring-sky-500 focus:ring-1 h-12"
            placeholder="Title, Movies, Keyword"
          />
          <span className="absolute inset-y-0 right-4 flex items-center pl-2">
            <Image
              className="h-5 w-5 fill-slate-300 text-off-white"
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
        <div className="pl-4 h-14 flex items-center">
          <Image
            className="h-5 w-5 fill-slate-300 text-off-white"
            src={SearchSvg}
            alt="search icon"
            onClick={() => setExpanded(true)}
          />
        </div>
      )}
      <div className="flex items-center">
        <SortMenu handleSortChange={handleSortChange} />
        <Image
          src={theme === "dark" ? lightThemeSvg : darkThemeSvg}
          alt="theme_icon"
          onClick={toggleTheme}
          className="cursor-pointer mx-2 h-6 w-6"
        />
        <Image
          src={view === "grid" ? gridSvg : kebabMenuSvg}
          alt="theme_icon"
          onClick={toggleView}
          className="cursor-pointer mx-2 h-6 w-6"
        />
      </div>
    </div>
  );
};
export default Search;
