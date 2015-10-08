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
    }
  };

}(this));
