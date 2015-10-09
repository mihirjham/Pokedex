/* global React */
(function(root) {
  'use strict';

  var PokemonForm = root.PokemonForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    render: function(){
      return(
        <form>
          Name:
          <input valueLink={this.linkState("name")}/>
          
        </form>
      );
    }
  });
}(this));
