/* global React */

(function(root) {
  'use strict';

  var PokemonDetail = root.PokemonDetail = React.createClass({
    getStateFromStore: function(){
      return PokemonStore.find(parseInt(this.props.params.pokemonId));
    },
    getInitialState: function(){
      return {pokemon: this.getStateFromStore()};
    },
    render: function(){
      return(
        <div className="detail">
          {this.state.pokemon}
        </div>
      );
    }
  });
}(this));
