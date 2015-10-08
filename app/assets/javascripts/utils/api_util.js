(function(root) {
  'use strict';

  var ApiUtil = root.ApiUtil = {
    fetchAllPokemons: function(){
      $.ajax({
        url: "/api/pokemon",
        type: "get",
        dataType: "json",
        success: function(responseData){
          ApiActions.receiveAllPokemon(responseData);
        }
      });
    },

    fetchPokemon: function(id){
      $.ajax({
        url: "/api/pokemon/" + id.toString(),
        type: "get",
        dataType: "json",
        success: function(responseData){
          ApiActions.receiveSinglePokemon(responseData);
        }
      });
    }
  };

}(this));
