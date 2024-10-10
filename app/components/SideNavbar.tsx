"use client";
import { createElement } from "react";
import Image from "next/image";
import profile from "../profile.jpg";
import closeSvg from "../icons/close.svg";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { MdTv } from "react-icons/md";
import { PiClockClockwiseFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
const navbarSections = [
  [
    {
      icon: FaSearch,
      name: "Discover",
    },
    {
      icon: MdOutlinePlaylistPlay,
      name: "Playlist",
    },
    {
      icon: MdLiveTv,
      name: "Movies",
    },
    {
      icon: MdTv,
      name: "TV Shows",
    },
    {
      icon: FaListUl,
      name: "My List",
    },
  ],
  [
    {
      icon: PiClockClockwiseFill,
      name: "Watch Later",
    },
    {
      icon: FaRegHeart,
      name: "Recomended",
    },
  ],
  [
    {
      icon: IoSettingsOutline,
      name: "Settings",
    },
    {
      icon: MdLogout,
      name: "Logout",
    },
  ],
];
const name = "Eric Hoffman";
const SideNavbar = ({ open, toggleNav }) => {
  const selected = "Discover";
  return (
    <div className="realtive">
      {open && (
        <Image
          src={closeSvg}
          className="md:hidden absolute h-5 w-5 cursor-pointer top-5 end-5"
          alt="Profile picture"
          onClick={toggleNav}
        />
      )}
      <div className="pt-10 pb-5">
        <Image
          src={profile}
          className="h-24 w-24 mx-auto rounded-full"
          alt="Profile picture"
        />
        <div className="text-center pt-3">{name}</div>
      </div>
      {navbarSections.map((section, i) => (
        <div key={i}>
          <hr className="border-card-background" />
          <ul className="py-3">
            {section.map(({ name, icon }) => (
              <li
                key={name}
                className={`flex leading-9 ps-12 cursor-pointer items-center ${
                  selected === name
                    ? "border-r-gray-500 dark:border-r-tint border-r-4 dark:text-tint text-gray-500 font-semibold"
                    : "text-navy dark:text-off-white"
                }`}
              >
                {createElement(icon, {
                  className: `mr-3.5 h-5 w-5  ${
                    selected === name ? "dark:text-tint text-r-gray-500" : ""
                  }`,
                })}
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default SideNavbar;
