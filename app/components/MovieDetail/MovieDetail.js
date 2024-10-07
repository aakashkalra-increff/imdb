import { useEffect, useState } from "react";
import "./MovieDetail.css";
import Image from "next/image";
const MovieDetail = ({ movie, row }) => {
  const [animate, setAnimate] = useState(0);
  useEffect(() => {
    setAnimate(0);
    setTimeout(() => {
      setAnimate(1);
    }, 1000);
  }, [row]);
  return (
    <div
      style={{ gridRow: row }}
      className="detail-view animate bg-card-background rounded-lg text-off-white"
    >
      <div
        className={`flex origin-center animateHover w-full`}
        style={{ opacity: animate }}
      >
        <Image src={movie.Poster} className="w-1/3 h-80" alt="movie poster"/>
        <div className="m-2 ms-11 w-2/ flex flex-col justify-center">
          <div className="text-3xl">{movie.Title}</div>
          <div className="flex items-center mt-3">
            <div className="w-24 bg-gray-800 rounded-md h-2 flex">
              <span
                className="bg-tint h-full"
                style={{ width: `${movie.imdbRating * 10}%` }}
              ></span>
            </div>
            {movie.imdbRating !== "N/A" && <div className="ms-3">{movie.imdbRating} /10</div>}
          </div>
          <div className="mt-6">
            <div className="text-base">Year: {movie.Year}</div>
            {movie.Runtime !== "N/A" && (
              <div>Running time: {movie.Runtime}</div>
            )}
            {movie.Director !== "N/A" && (
              <div>Drirected By: {movie.Director}</div>
            )}
            <div>Language: {movie.Language}</div>
          </div>
          <div className="text-sm">{movie.Plot}</div>
          <div className="mt-7">
            <button className="h-[38px] bg-tint text-black font-bold rounded-lg text-center mr-2 w-40">
              Play Movie
            </button>
            <button className="h-[38px] border-tint border-2 text-tint text-center rounded-lg w-40">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetail;
