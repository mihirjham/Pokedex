/* global React */
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Index = React.createClass({
  render: function(){
    return(
      <div>
        <PokemonForm />
        <div className="pokemon-index">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});

$(document).ready(function () {
  React.render(
    <Router>
      <Route path="/" component={Index}>
        <Route path="pokemon/:pokemonId" component={PokemonDetail} />
        <Route path="/pokemon/:pokemonId/toys/:toyId" components={{pokemonDetail: PokemonDetail, toyDetail: ToyDetail}} />
      </Route>
    </Router>
  , document.getElementById("pokedex"));
});
