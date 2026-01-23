import { useState } from "react";
import { Search, CircleArrowRight } from "lucide-react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#1f232d] flex flex-col items-center justify-between">
        <header className="w-full max-w-screen h-8 bg-red-600"></header>
        {showResult ? (
          <PokemonCard />
        ) : (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-white text-5xl font-semibold antialiased lg:text-8xl xl:text-8xl">
              Find a Pokemon
            </h1>
            {isSearching ? (
              <div className="flex items-center gap-2 flex flex-col">
                <input
                  type="text"
                  placeholder="type name of pokemon..."
                  //autoFocus
                  onBlur={() => setIsSearching(false)}
                  className="mt-4 rounded-3xl px-4 py-3 text-white text-2xl lg:text-3xl xl:text-3xl outline-none border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/20 w-80 h-16 lg:w-96 xl:w-96 lg:h-24 xl:h-24 active:scale-95"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowResult(true);
                    setIsSearching(false);
                  }}
                  aria-label="Search"
                  className="search_btn mt-4 flex size-16 lg:size-40 xl:size-40 justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/40 active:scale-90"
                >
                  <CircleArrowRight className="size-8 lg:size-20 xl:size-20 text-white self-center" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsSearching(true)}
                aria-label="Search"
                className="search_btn mt-4 flex size-20 lg:size-40 xl:size-40 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/20 active:scale-90"
              >
                <Search className="size-10 lg:size-20 xl:size-20" />
              </button>
            )}
          </div>
        )}
        <footer className="w-full max-w-screen h-8 bg-white"></footer>
      </div>
    </>
  );
}

export default App;
