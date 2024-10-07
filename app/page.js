import MovieList from "./components/MovieList.js";
import Navbar from './components/Navbar.js'
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-64 bg-nav">
        <Navbar />
      </div>
      <div className="bg-[#273244] flex-1 md:px-[4rem] lg:px-[3rem] overflow-y-scroll h-screen">
        <MovieList />
      </div>
    </main>
  );
}
