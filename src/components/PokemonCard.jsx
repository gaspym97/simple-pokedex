function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg shadow-black/20 w-80 lg:w-96 xl:w-96">
      <h2 className="text-white text-3xl font-bold mb-4">{pokemon.name}</h2>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-full h-auto mb-4"
      />
      <div className="text-white text-lg">
        <p>
          <strong>Type:</strong> {pokemon.type.join(", ")}
        </p>
        <p>
          <strong>Abilities:</strong> {pokemon.abilities.join(", ")}
        </p>
        <p>
          <strong>Height:</strong> {pokemon.height} m
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight} kg
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;