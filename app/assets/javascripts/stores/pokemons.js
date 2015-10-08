(function(root) {
  'use strict';

  var _pokemons = [];
  var resetPokemons = function(pokemons){
    _pokemons = pokemons.slice();
  };

  var resetSinglePokemon = function(pokemon){
    for(var i = 0; i < _pokemons.length; i++){
      if(_pokemons[i].id === pokemon.id){
        _pokemons[i] = pokemon;
        return;
      }
    }
    _pokemons.push(pokemon);
  }
  var POKEMON_INDEX_CHANGE_EVENT = "POKEMON_INDEX_CHANGE_EVENT";
  
  var PokemonStore = root.PokemonStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _pokemons.slice();
    },
    find: function(id){
      for(var i = 0; i < _pokemons.length; i++){
        if(_pokemons[i].id === id){
          return _pokemons[i];
        }
      }
    },
    addPokemonsIndexChangeListener: function(handler){
      this.on(POKEMON_INDEX_CHANGE_EVENT, handler);
    },
    removePokemonsIndexChangeListener: function(handler){
      this.removeListener(POKEMON_INDEX_CHANGE_EVENT, handler);
    },
    changed: function(){
      this.emit(POKEMON_INDEX_CHANGE_EVENT);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case PokemonConstants.POKEMONS_RECEIVED:
          resetPokemons(payload.pokemons);
          PokemonStore.changed();
          break;

        case PokemonConstants.POKEMON_RECEIVED:
          resetSinglePokemon(payload.pokemon);
          PokemonStore.changed();
          break;
      }
    })
  });
}(this));
