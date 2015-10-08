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
    componentDidMount: function(){
      PokemonStore.addPokemonsIndexChangeListener(this._onChange);
      ApiUtil.fetchPokemon(parseInt(this.props.params.pokemonId));
    },
    _onChange: function(){
      this.setState({pokemon: this.getStateFromStore()});
    },
    componentWillReceiveProps: function(){
      ApiUtil.fetchPokemon(parseInt(this.props.params.pokemonId));
    },
    render: function(){
      if(this.state.pokemon === undefined){
        return(
          <div>
          </div>
        );
      }

      return(
        <div className="detail">
          <img src={this.state.pokemon.image_url} /><br/>
          Attack: {this.state.pokemon.attack}<br/>
          Defense: {this.state.pokemon.defense}<br/>
            <ul>
              Moves:
              {
                this.state.pokemon.moves.map(function(move){
                  return <li>{move}</li>;
                })
              }
            </ul>

        </div>
      );
    }
  });
}(this));
