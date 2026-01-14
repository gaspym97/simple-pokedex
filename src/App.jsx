import { useState } from "react";
import { Search, CircleArrowRight } from "lucide-react";

function App() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#1f232d] flex flex-col items-center justify-between">
        <header className="w-full max-w-screen h-16 px-4 py-6 bg-red-600"></header>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-white text-5xl font-extrabold antialiased">
            Find a Pokemon
          </h1>
          {isSearching ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="type name of pokemon..."
                //autoFocus
                onBlur={() => setIsSearching(false)}
                className="mt-4 rounded-3xl px-4 py-3 text-white text-lg outline-none border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/20"
              />
              <CircleArrowRight className="size-10 text-white mt-4" />
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsSearching(true)}
              aria-label="Search"
              className="search_btn mt-4 inline-flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/20"
            >
              <Search className="size-10" />
            </button>
          )}
        </div>
        <footer className="w-full max-w-screen h-16 px-4 py-6 bg-white"></footer>
      </div>
    </>
  );
}

export default App;
