var React  = require('react');
var joinClasses = require( 'react/lib/joinClasses' );
var Slider = require('./Slider');
var BButton = require('./BButton');
var BIcon = require('./BIcon');


var APP = React.createClass({

    getDefaultProps: function(){
        return {
            txt:'dsfsdsd',
            cat:0
        }
    },

    getInitialState: function(){
        return {
            red: 0,
            green: 0,
            blue: 0
        }

    },

    propTypes: {
        txt:React.PropTypes.string,
        cat:React.PropTypes.number.isRequired
    },

    update: function(e){
        this.setState({
            red:this.refs.red.refs.range.getDOMNode().value,
            green:this.refs.green.refs.range.getDOMNode().value,
            blue:this.refs.blue.refs.range.getDOMNode().value
        })
    },
    render: function(){

        return (
            <div>
                <BButton href="javascript:alert('hello')" className="btn-primary">
                    <BIcon className="glyphicon-heart"/> Button
                </BButton>
                <BButton className="btn-success">
                    <BIcon className="glyphicon-pencil"/> Button
                </BButton>
                <BButton className="btn-danger">
                    <BIcon className="glyphicon-inbox"/> Button
                </BButton>
                {this.state.txt}
                <hr/>
                <Slider ref="red" update={this.update}/>
                <label>{this.state.red}</label>
                <Slider ref="green" update={this.update}/>
                <label>{this.state.green}</label>
                <Slider ref="blue" update={this.update}/>
                <label>{this.state.blue}</label>
            </div>
        );
    }
});

module.exports = APP;


React.render(
    <APP cat={5} txt="er"/>,
    document.body
);