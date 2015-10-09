/* global React */

(function(root) {
  'use strict';

  var ToyDetail = root.ToyDetail = React.createClass({
    getStateFromStore: function(){
      return PokemonStore.findToy(parseInt(this.props.params.pokemonId), parseInt(this.props.params.toyId));
    },
    getInitialState: function(){
      return {toy: this.getStateFromStore()};
    },
    _onChange: function(){
      this.setState({toy: this.getStateFromStore()});
    },
    componentDidMount: function(){
      PokemonStore.addPokemonsIndexChangeListener(this._onChange);
      ApiUtil.fetchPokemon(parseInt(this.props.params.pokemonId));
    },
    componentWillUnmount: function(){
      PokemonStore.removePokemonsIndexChangeListener(this._onChange);
    },
    componentWillReceiveProps: function(){
      ApiUtil.fetchPokemon(parseInt(this.props.params.pokemonId));
    },
    render: function(){
      if(this.state.toy === undefined){
        return <div></div>;
      }
      return(
        <div className="detail">
          Name: {this.state.toy.name}<br/>
          Happiness: {this.state.toy.happiness}<br/>
          <img src={this.state.toy.image_url}/>
        </div>
      );
    }
  });
}(this));
