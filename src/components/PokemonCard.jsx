function PokemonCard() {
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      <div className="flex items-center flex-col">
        <h1 className="text-white text-5xl lg:text-6xl xl:text-7xl">Pikachu</h1>
        <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl">#025</h2>
      </div>
      <div className="flex flex-col gap-4 md:flex-row lg:flex-row xl:flex-row">
        <div className="bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg shadow-black/20 w-80 lg:w-96 xl:w-[34rem]">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            alt="pokemon"
          />
          <p className="text-white xl:text-3xl">
            It sprays a foul fluid from its rear. Its stench spreads over a mile
            radius, driving Pokémon away.
          </p>
        </div>
        <div className=" bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg shadow-black/20 w-80 lg:w-96 xl:w-[34rem] flex flex-col justify-center gap-4">
          <div className="grid grid-cols-3 gap-4 rounded-2xl bg-[#F8E5DD] p-4">
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold">Height</nav>
              <nav>1'4"</nav>
            </div>
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold">Weight</nav>
              <nav>7 lbs</nav>
            </div>
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold">Gender</nav>
              <nav>icon</nav>
            </div>
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold">Category</nav>
              <nav>icon</nav>
            </div>
            <div className="xl:text-3xl flex flex-col items-center">
              <nav className="font-bold" >Abilities</nav>
              <nav>icon</nav>
            </div>
          </div>
          <div className="space-y-2 flex flex-row justify-around items-baseline">
            <div className="text-white flex flex-col items-center gap-2">
              <nav className="font-bold mt-4 xl:text-3xl self-center">Type</nav>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <span className="bg-yellow-400 text-black inline-flex w-28 min-w-28 justify-center py-0.5 rounded-md xl:text-2xl">
                    Bug
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-white flex flex-col items-center gap-2">
              <nav className="font-bold xl:text-3xl">Weaknesses</nav>
              <ul className="grid grid-cols-1 gap-2">
                <li>
                  <span className="bg-blue-400 text-black inline-flex w-28 min-w-28 justify-center py-0.5 rounded-md xl:text-2xl">
                    Fighting
                  </span>
                </li>
                <li>
                  <span className="bg-green-400 text-black inline-flex w-28 min-w-28 justify-center py-0.5 rounded-md xl:text-2xl">
                    Psychic
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
