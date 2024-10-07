import Image from "next/image";
import SearchSvg from "../icons/search.svg";
import CloseSvg from "../icons/close.svg"
const Search = ({val, handleChange}) => {
  return (
    <label className="relative">
    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
      <Image className="h-5 w-5 fill-slate-300 text-off-white" src={SearchSvg} alt="search icon"/>
    </span>
    <input
      value={val}
      onChange={handleChange}
      className="w-1/2 h-14 rounded-md ps-11 pe-3 bg-slate-900  placeholder:text-off-white text-white focus:outline-none focus:ring-sky-500 focus:ring-1 h-12"
      placeholder="Title, Movies, Keyword"
    />
    <span className="absolute inset-y-0 right-4 flex items-center pl-2">
      <Image className="h-5 w-5 fill-slate-300 text-off-white" src={CloseSvg} alt="close icon"/>
    </span>
  </label>
  )
};
export default Search;
