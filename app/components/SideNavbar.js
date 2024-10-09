"use client";
import Image from "next/image";
import playlistSvg from "../icons/playlist.svg";
import movieSvg from "../icons/movie.svg";
import tvShowsSvg from "../icons/tv_shows.svg";
import myListSvg from "../icons/my_list.svg";
import searchSvg from "../icons/search.svg";
import watchLaterSvg from "../icons/watch_later.svg";
import recomendedSvg from "../icons/recomended.svg";
import settingsSvg from "../icons/settings.svg";
import logoutSvg from "../icons/logout.svg";
import profile from "../profile.jpg";
import closeSvg from "../icons/close.svg";
const section1 = [
  {
    image: searchSvg,
    name: "Discover",
  },
  {
    image: playlistSvg,
    name: "Playlist",
  },
  {
    image: movieSvg,
    name: "Movies",
  },
  {
    image: tvShowsSvg,
    name: "TV Shows",
  },
  {
    image: myListSvg,
    name: "My List",
  },
];
const section2 = [
  {
    image: watchLaterSvg,
    name: "Watch Later",
  },
  {
    image: recomendedSvg,
    name: "Recomended",
  },
];
const section3 = [
  {
    image: settingsSvg,
    name: "Settings",
  },
  {
    image: logoutSvg,
    name: "Logout",
  },
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
      <hr className="border-card-background" />
      <ul className="py-3">
        {section1.map((item) => (
          <li
            key={item.name}
            className={`flex leading-9 ps-12 cursor-pointer ${
              selected === item.name
                ? "border-r-nav border-r-tint border-r-4 text-nav text-tint"
                : ""
            }`}
          >
            {" "}
            <Image
              src={item.image}
              width={16}
              height={16}
              className={`mr-3.5 ${
                selected === item.name ? "tint" : "dark:filter-none color"
              }`}
              alt={item.name}
            />
            {item.name}
          </li>
        ))}
      </ul>
      <hr className="border-card-background" />
      <ul className="py-3">
        {section2.map((item) => (
          <li key={item.name} className="flex leading-9 ps-12 cursor-pointer">
            {" "}
            <Image
              src={item.image}
              width={16}
              height={16}
              className="mr-3.5 color dark:filter-none"
              alt={item.name}
            />
            {item.name}
          </li>
        ))}
      </ul>
      <hr className="border-card-background" />
      <ul className="py-3">
        {section3.map((item) => (
          <li key={item.name} className="flex leading-9 ps-12 cursor-pointer">
            {" "}
            <Image
              src={item.image}
              width={16}
              height={16}
              className="mr-3.5 color dark:filter-none"
              alt={item.name}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideNavbar;
