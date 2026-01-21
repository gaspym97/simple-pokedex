function PokemonCard() {
  return (
    <div className="flex flex-col items-center gap-4 my-10">
      <div className="flex items-center flex-col">
        <h1 className="text-white text-5xl lg:text-6xl xl:text-8xl">Pikachu</h1>
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
        <div className=" bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg shadow-black/20 w-80 lg:w-96 xl:w-[34rem]">
          <div className="flex justify-between rounded-2xl bg-[#F8E5DD] p-4">
            <div className="xl:text-3xl">
              <nav>Height</nav>
              <nav>1'4"</nav>
            </div>
            <div className="xl:text-3xl">
              <nav>Weight</nav>
              <nav>7 lbs</nav>
            </div>
            <div className="xl:text-3xl">
              <nav>Gender</nav>
              <nav>icon</nav>
            </div>
          </div>
          <div className="text-white">
            <nav className="mt-4 xl:text-3xl">Type</nav>
            <ul className="inline-flex space-x-2">
              <li>
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-md xl:text-2xl">
                  Electric
                </span>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <nav className="xl:text-3xl">Weaknesses</nav>
            <ul className="inline-flex space-x-2">
              <li>
                <span className="bg-blue-400 text-black px-2 py-1 rounded-md xl:text-2xl">
                  Water
                </span>
              </li>
              <li>
                <span className="bg-green-400 text-black px-2 py-1 rounded-md xl:text-2xl">
                  Ground
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
