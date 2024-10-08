"use client";
const { useState, useRef } = require("react");
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
    } else {
      showMenu();
    }
  };
  return (
    <div className="flex items-center h-6">
      <button
        ref={buttonRef}
        className="flex items-center relative text-base leading-5 font-semibold bg-nav rounded-full py-1 px-3 hover:bg-slate-400/20 dark:highlight-white/5 group"
        onClick={toggleMenu}
      >
        Sort By - {selectedItem.name}
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
        <div className="absolute group-focus bg-slate-800 w-0 h-0 overflow-hidden rounded-md right-0 top-7 transition-all group-focus:h-[auto] group-focus:w-40 delay-150 duration-300 shadow-xl">
          <ul className="p-3 text-left text-base text-off-white">
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
