(function(root) {
  'use strict';

  var ToysIndex = root.ToysIndex = React.createClass({
    mixins: [ReactRouter.History],
    showDetail: function(toy){
      var url = "/pokemon/" + toy.pokemon_id.toString() + "/toys/" + toy.id.toString();
      this.history.pushState(null, url);
    },
    render: function(){
      if(this.props.toys === undefined){
        return <div></div>;
      }
      return(
        <div>
          <ul>
            {this.props.toys.map(function(toy){
              return (<li key={toy.id} className="toy-list-item" onClick={this.showDetail.bind(null, toy)}>
                <ToyIndexItem toy={toy} />
              </li>);
            }.bind(this))}
          </ul>
        </div>
      );
    }
  });
}(this));
