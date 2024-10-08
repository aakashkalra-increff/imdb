"use client";
import { useState } from "react";
import MovieList from "./components/MovieList.js";
import Navbar from "./components/Navbar.js";
import ThemeContext from "./contexts/themeContext.js";
import Home from "./components/Home.js";
export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <main className={`flex min-h-screen ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="hidden md:block w-64 bg-white dark:bg-nav">
          <Navbar />
        </div>
        <div className="bg-[#273244] flex-1 md:px-[4rem] lg:px-[3rem] overflow-y-scroll h-screen">
          <Home />
        </div>
      </ThemeContext.Provider>
    </main>
  );
}
