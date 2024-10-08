import { useEffect, useState } from "react";
import "./MovieDetail.css";
import Image from "next/image";
import moment from "moment";
const MovieDetail = ({ movie, row, showAnimation = true }) => {
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
      className={`detail-view ${
        showAnimation ? "animate" : ""
      } bg-card-background rounded-xl text-off-white my-4 overflow-hidden`}
    >
      <div
        className={`flex origin-center w-full`}
        style={{ opacity: showAnimation ? animate : 1 }}
      >
        <div className="w-1/3 h-80">
          <img
            src={movie.Poster}
            className="h-full w-full"
            alt="movie poster"
          />
        </div>
        <div className="m-2 ms-11 w-2/3 flex flex-col justify-center">
          <div>
            <div className="text-2xl">{movie.Title}</div>
            <div className="flex items-center mt-3">
              <div className="w-24 bg-gray-800 rounded-md h-2 flex">
                <span
                  className="bg-tint h-full"
                  style={{ width: `${movie.imdbRating * 10}%` }}
                ></span>
              </div>
              {movie.imdbRating !== "N/A" && (
                <div className="ms-3 leading-7">{movie.imdbRating} /10</div>
              )}
            </div>
            <div className="mt-3">
              {movie.Released !== "N/A" && (
                <div className="text-base leading-7">
                  <span className="w-28 inline-block">Year:</span>{" "}
                  {moment(movie.Released, "DD MMM YYYY").year()}
                </div>
              )}
              {movie.Runtime !== "N/A" && (
                <div className="leading-7">
                  <span className="w-28 inline-block">Running time:</span>{" "}
                  {movie.Runtime}
                </div>
              )}
              {movie.Director !== "N/A" && (
                <div className="leading-7">
                  <span className="w-28 inline-block">Drirected By:</span>{" "}
                  {movie.Director}
                </div>
              )}
              <div>
                <span className="w-28 inline-block leading-7">Language:</span>{" "}
                {movie.Language}
              </div>
            </div>
            <div className="text-sm my-2">{movie.Plot}</div>
            <div className="my-3">
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
    </div>
  );
};
export default MovieDetail;
