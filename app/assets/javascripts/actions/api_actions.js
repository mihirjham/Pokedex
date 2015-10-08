(function(root) {
  'use strict';

  var ApiActions = root.ApiActions = {
    receiveAllPokemon: function(pokemons){
      var action = {
        actionType: PokemonConstants.POKEMONS_RECEIVED,
        pokemons: pokemons
      };

      AppDispatcher.dispatch(action);
    },
    receiveSinglePokemon: function(pokemon){
      var action = {
        actionType: PokemonConstants.POKEMON_RECEIVED,
        pokemon: pokemon
      };

      AppDispatcher.dispatch(action);
    }
  };
}(this));
