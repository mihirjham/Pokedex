(function(root) {
  'use strict';

  var _pokemons = [];
  var resetPokemons = function(pokemons){
    _pokemons = pokemons.slice();
  };
  var POKEMON_INDEX_CHANGE_EVENT = "POKEMON_INDEX_CHANGE_EVENT";

  var PokemonStore = root.PokemonStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _pokemons.slice();
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
      }
    })
  });
}(this));
