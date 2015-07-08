var React  = require('react');
var joinClasses = require( 'react/lib/joinClasses' );

var BIcon = React.createClass({
    render: function() {
        var className = this.props;
        return(
            <div>
                <span className={joinClasses(className,"glyphicon")}></span>
            </div>
        );
    }
});

module.exports = BIcon;