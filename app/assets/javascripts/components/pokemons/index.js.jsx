/* global React */

(function(root) {
  'use strict';

  var PokemonsIndex = root.PokemonsIndex = React.createClass({
    getInitialState: function(){
      return {pokemons: []};
    },
    _onChange: function(){
      this.setState({pokemons: PokemonStore.all()});
    },
    componentDidMount: function(){
      PokemonStore.addPokemonsIndexChangeListener(this._onChange);
      ApiUtil.fetchAllPokemons();
    },
    componentWillUnmount: function(){
      PokemonStore.removePokemonsIndexChangeListener(this._onChange);
    },
    render: function(){
      return(
        <div>
          <ul>
          {
            this.state.pokemons.map(function(pokemon){
              return <li key= {pokemon.id} className="poke-list-item"><PokemonIndexItem key={pokemon.id} pokemon={pokemon} /></li>;
            })
          }
        </ul>
        </div>
      );
    }
  });

}(this));
