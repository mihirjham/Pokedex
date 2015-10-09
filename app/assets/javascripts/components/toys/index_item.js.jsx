/* global React */

(function(root) {
  'use strict';

  var ToyIndexItem = root.ToyIndexItem = React.createClass({
    render: function(){
      return(
        <div>
          Name: {this.props.toy.name}
        </div>
      );
    }
  });
}(this));
