"use client";
import { useRef, useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";

const menuItems = [
  {
    name: "Featured",
    val: "featured",
  },
  {
    name: "Rating",
    val: "imdbRating",
  },
  {
    name: "Latest",
    val: "Released",
  },
];
const SortMenu = ({ handleSortChange }) => {
  const buttonRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const focus = useRef(false);
  const selectItem = (item) => {
    setSelectedItem(item);
    handleSortChange(item.val);
  };
  const hideMenu = () => {
    buttonRef.current.blur();
    focus.current = false;
  };
  const showMenu = () => {
    buttonRef.current.focus();
    focus.current = true;
  };
  const toggleMenu = () => {
    if (focus.current) {
      hideMenu();
      return;
    }
      showMenu();
  };
  return (
    <div className="flex items-center h-7">
      <button
        ref={buttonRef}
        className="h-full flex items-center relative text-sm md:text-base leading-5 bg-slate-400/20 dark:bg-navy rounded-full py-1 px-3 hover:bg-slate-400/20 dark:highlight-white/5 group"
        onClick={toggleMenu}
      >
        <span className="hidden md:block">Sort By - {selectedItem.name}</span>
        <span className="md:hidden">
          <BiSortAlt2 />
        </span>
        <svg
          width="6"
          height="3"
          className="ml-2 overflow-visible"
          aria-hidden="true"
        >
          <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
        <div className="absolute group-focus bg-white dark:bg-navy w-0 h-0 overflow-hidden rounded-md right-0 top-7 group-focus:h-[auto] group-focus:w-auto shadow-xl">
          <ul className="p-3 text-left text-sm md:text-base text-navy dark:text-off-white">
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => selectItem(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
};
export default SortMenu;
