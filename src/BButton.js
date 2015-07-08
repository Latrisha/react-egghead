var React  = require('react');
var joinClasses = require( 'react/lib/joinClasses' );

var BButton = React.createClass({
    render: function() {
        var className = this.props;
        return(
            <a className={joinClasses(className, "btn")}>{this.props.children}</a>
        );
    }
});

module.exports = BButton;