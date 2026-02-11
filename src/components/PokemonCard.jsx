import typeColors from "../constants/typeColors";

function PokemonCard({pokemon}) {
  if (!pokemon) return
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      <div className="flex items-center flex-col">
        <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl">{pokemon.name}</h1>
        <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl">#{pokemon.id.toString().padStart(3, '')}</h2>
      </div>
      <div className="flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row">
        <div className="flex flex-col bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg shadow-black/20 w-80 lg:w-96 xl:w-[34rem]">
          <img
            src={pokemon.image}
            alt={pokemon.name}
          />
          <p className="text-white xl:text-3xl">
            {pokemon.description}
          </p>
        </div>
        <div className=" bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg shadow-black/20 w-80 lg:w-96 xl:w-[34rem] flex flex-col justify-center gap-4">
          <div className="grid grid-cols-3 gap-4 rounded-2xl bg-[#F8E5DD] p-4">
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold">Height</nav>
              <nav>{pokemon.height / 10} m</nav>
            </div>
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold">Weight</nav>
              <nav>{pokemon.weight / 10} kg</nav>
            </div>
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold">Gen</nav>
              <nav>{pokemon.generation}</nav>
            </div>
          </div>
          <div className="space-y-2 flex flex-row justify-around items-baseline">
            <div className="text-white flex flex-col items-center gap-2">
              <nav className="font-bold mt-4 xl:text-3xl self-center">Type</nav>
              <ul className="types grid grid-cols-1 gap-2">
                {pokemon.types.map(type => (
                  <li key={type}>
                    <span className={`${typeColors[type]} uppercase inline-flex w-28 min-w-28 justify-center py-0.5 rounded-md xl:text-2xl`}>
                      {type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-white flex flex-col items-center gap-2">
              <nav className="font-bold xl:text-3xl">Weaknesses</nav>
              <ul className="weaknesses grid grid-cols-1 gap-2">
                {pokemon.weaknesses.map(w => (
                  <li key={w}>
                    <span className={`${typeColors[w]} uppercase inline-flex w-28 min-w-28 justify-center py-0.5 rounded-md xl:text-2xl`}>
                      {w}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
