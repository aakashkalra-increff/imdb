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
  }
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
const Navbar = () => {
  return (
    <div>
      <div className="h-20"></div>
      <ul className="py-3">
        {section1.map((item) => (
          <li key={item.name} className="flex leading-9 ps-12">
            {" "}
            <Image src={item.image} width={16} height={16} className="mr-3.5" />
            {item.name}
          </li>
        ))}
      </ul>
      <ul className="py-3">
        {section2.map((item) => (
          <li key={item.name} className="flex leading-9 ps-12">
            {" "}
            <Image src={item.image} width={16} height={16} className="mr-3.5" />
            {item.name}
          </li>
        ))}
      </ul>
      <ul className="py-3">
        {section3.map((item) => (
          <li key={item.name} className="flex leading-9 ps-12">
            {" "}
            <Image src={item.image} width={16} height={16} className="mr-3.5" />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
