var React  = require('react');
var joinClasses = require( 'react/lib/joinClasses' );

var Slider = React.createClass({
    render: function() {
        return(
            <input ref="range" type="range" min="0" max="255" onChange={this.props.update}></input>
        );
    }
});

module.exports = Slider;