import { useState } from "react";
import { Search, CircleArrowRight } from "lucide-react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) return

    setShowResult(true)
    setIsSearching(false)

    console.log("User submitted:", query);
  }

  async function fetchPokemonByName(name) {
    try {
      // start waiting for data
      setLoading(true);
      // clear previous errors
      setError(null);

      // ask api for data and wait for response
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

      // convert response into usable data
      const data = await response.json()

      // save data into state
      setPokemon(data)
    } catch (err) {
      // if error happens, save an error message
      setError("Failed to fetch Pokemon data.");
    } finally {
      // no matter what, stop loading
      setLoading(false);
    }
  }

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
              <form 
              className="flex items-center gap-2 flex flex-col"
              onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="type name of pokemon..."
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  //onBlur={() => setIsSearching(false)}
                  className="mt-4 rounded-3xl px-4 py-3 text-white text-2xl lg:text-3xl xl:text-3xl outline-none border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/20 w-80 h-16 lg:w-96 xl:w-96 lg:h-24 xl:h-24 active:scale-95"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="search_btn mt-4 flex size-16 lg:size-40 xl:size-40 justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg shadow-black/20 transition hover:bg-white/40 active:scale-90"
                >
                  <CircleArrowRight className="size-8 lg:size-20 xl:size-20 text-white self-center" />
                </button>
              </form>
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
