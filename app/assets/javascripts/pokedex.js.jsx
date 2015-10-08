/* global React */
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Index = React.createClass({
  render: function(){
    return(
      <div className="pokemon-index">
        <PokemonsIndex />
      </div>
    );
  }
});

$(document).ready(function () {
  React.render(
    <Router>
      <Route path="/" component={Index}/>
    </Router>
  , document.getElementById("pokedex"));
});
