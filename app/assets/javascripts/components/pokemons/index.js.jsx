/* global React */

(function(root) {
  'use strict';

  var PokemonsIndex = root.PokemonsIndex = React.createClass({
    mixins: [ReactRouter.History],
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
    showDetail: function(pokemon){
      var url = "/pokemon/" + pokemon.id.toString();
      this.history.pushState(null,url);
    },
    render: function(){
      return(
        <div>
          <ul>
          {
            this.state.pokemons.map(function(pokemon){
              return <li key= {pokemon.id} className="poke-list-item" onClick={this.showDetail.bind(null, pokemon)}>
                <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
                </li>;
            }.bind(this))
          }
        </ul>
        </div>
      );
    }
  });

}(this));
