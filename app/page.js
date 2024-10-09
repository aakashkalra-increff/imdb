"use client";
import { useState } from "react";
import MovieList from "./components/MovieList.js";
import ThemeContext from "./contexts/themeContext.js";
import Home from "./components/Home.js";
import SideNavbar from "./components/SideNavbar.js";
export default function App() {
  const [theme, setTheme] = useState("dark");
  const [navOpen, setNavOpen] = useState(false);
  const toggleSideNav = ()=>{
    setNavOpen((prev)=> !prev);
  }
  return (
    <main className={`flex min-h-screen ${theme} text-nav dark:text-inherit`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          className={`${
            navOpen ? "block" : "hidden"
          } md:block fixed z-30 md:static w-56 lg:w-64 bg-white dark:bg-nav border-r-nav border-r-0 dark:border-none h-screen overflow-y-scroll`}
        >
          <SideNavbar open={navOpen} toggleNav={toggleSideNav}/>
        </div>
        <div className="bg-white/95 dark:bg-[#273244] flex-1 sm:px-[1rem] md:px-[2rem] lg:px-[3rem] overflow-y-scroll h-screen">
          <Home toggleSideNav={toggleSideNav}/>
        </div>
      </ThemeContext.Provider>
    </main>
  );
}
