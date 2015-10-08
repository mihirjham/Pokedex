/* global React */

(function(root) {
  'use strict';

  var PokemonIndexItem = root.PokemonIndexItem = React.createClass({
    render: function(){
      return(
        <div>
          Name: {this.props.pokemon.name} PokeType: {this.props.pokemon.poke_type}
        </div>
      );
    }
  });
}(this));
