"use client";
import { useState } from "react";
import ThemeContext from "./contexts/themeContext";
import Home from "./components/Home";
import SideNavbar from "./components/SideNavbar";
export default function App() {
  const [theme, setTheme] = useState("dark");
  const [navOpen, setNavOpen] = useState(false);
  const toggleSideNav = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <main className={`flex min-h-screen ${theme} text-navy dark:text-inherit`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {navOpen && <div className="h-screen w-screen fixed bg-navy opacity-50 filter-blur z-[25]"></div>}
        <div
          className={`${
            navOpen ? "block" : "hidden"
          } md:block fixed z-30 md:static w-56 lg:w-64 bg-white dark:bg-navy border-r-navy border-r-0 dark:border-none h-screen overflow-y-scroll`}
        >
          <SideNavbar open={navOpen} toggleNav={toggleSideNav} />
        </div>
        <div className="bg-white/95 dark:bg-[#273244] flex-1 sm:px-[1rem] md:px-[2rem] lg:px-[3rem] overflow-y-scroll h-screen">
          <Home toggleSideNav={toggleSideNav} />
        </div>
      </ThemeContext.Provider>
    </main>
  );
}
