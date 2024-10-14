import { useEffect, useState } from "react";
import "./MovieDetail.css";
import { Invalid } from "../../constants";
import { IoClose } from "react-icons/io5";

const MovieDetail = ({
  movie,
  row = 0,
  showAnimation = true,
  closeMovieDetail = null,
}) => {
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
      className={`detail-view flex items-center ${
        showAnimation ? "animate" : ""
      } bg-slate-400/20 dark:bg-card-background rounded-xl my-4 overflow-hidden
      `}
    >
      <div
        className={`grid grid-cols-3 lg:grid-cols-4 origin-center w-full relative`}
        style={{ opacity: showAnimation ? animate : 1 }}
      >
        {closeMovieDetail && (
          <div className="absolute top-2 right-2 bg-navy">
            <IoClose
              className="w-6 h-6 cursor-pointer"
              onClick={closeMovieDetail}
            />
          </div>
        )}
        <div className="col-span-3 sm:col-span-1 flex items-center justify-center w-full overflow-hidden my-2 sm:mx-2">
          <div className="max-h-80 max-w-56">
            <img // eslint-disable-line
              src={movie.Poster}
              className="object-contain"
              alt="movie poster"
            />
          </div>
        </div>
        <div className="m-2 ms-6 md:ms-8 lg:ms-11 col-span-3 lg:col-span-3 sm:col-span-2 flex flex-col justify-center">
          <div className="text-sm lg:text-base ">
            <div className="text-xl lg:text-2xl">{movie.Title}</div>
            {movie.imdbRating !== Invalid.NA && (
              <div className="flex items-center">
                <div className="w-24 bg-gray-400 dark:bg-gray-800 rounded-md h-2 flex overflow-hidden">
                  <span
                    className="bg-navy dark:bg-tint h-full"
                    style={{ width: `${movie.imdbRating * 10}%` }}
                  ></span>
                </div>
                <div className="ms-3 leading-7">{movie.imdbRating} /10</div>
              </div>
            )}
            <div className="lg:mt-3 leading-5 xl:leading-7">
              {movie.Released !== Invalid.NA && (
                <div>
                  <span className="w-28 inline-block">Year:</span>
                  {new Date(movie.Released).getFullYear()}
                </div>
              )}
              {movie.Runtime !== Invalid.NA && (
                <div>
                  <span className="w-28 inline-block">Running time:</span>
                  {movie.Runtime}
                </div>
              )}
              {movie.Director !== Invalid.NA && (
                <div>
                  <span className="w-28 inline-block">Drirected By: </span>
                  {movie.Director}
                </div>
              )}
              <div>
                <span className="w-28 inline-block leading-7">Language:</span>
                {movie.Language}
              </div>
            </div>
            <div className="text-xs lg:text-sm my-2">{movie.Plot}</div>
            <div className="my-3 ">
              <button className="h-[38px] bg-navy dark:bg-tint dark:text-black text-white font-bold rounded-lg text-center mr-2 w-32 lg:w-40">
                Play Movie
              </button>
              <button className="h-[38px] border-navy dark:border-tint border-2 dark:text-tint text-center rounded-lg w-32 lg:w-40">
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
