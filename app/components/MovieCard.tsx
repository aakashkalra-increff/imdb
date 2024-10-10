import PlaySvg from '../icons/play.svg'
import Image from 'next/image';
import PlusSvg from '../icons/plus.svg'
const MovieCard = ({ movie }) => {
  return (
    <div className="cursor-pointer bg-slate-400/20 dark:bg-card-background h-[18rem] p-2.5 rounded-xl">
      <img // eslint-disable-line
        src={movie.Poster}
        className="h-[12rem] w-full"
        alt="Movie Poster"
      /> 
      <div className="dark:text-off-white truncate mt-3 font-semibold">
        {movie.Title}
      </div>
      <div className='flex mt-3'>
        <Image src={PlaySvg} className='dark:text-off-white color dark:filter-none' alt='play'/>
        <Image src={PlusSvg} className='ml-[1rem] dark:text-off-white color dark:filter-none' alt='add'/>
      </div>
    </div>
  );
};
export default MovieCard;
