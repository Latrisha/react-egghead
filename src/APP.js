import React from 'react';
import joinClasses from 'react/lib/joinClasses';
import Slider from './Slider';
import BButton from './BButton';
import BIcon from './BIcon';


export default  class APP extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
    }
    update(e){

    }

    render(){
        return (
            <div>
                {this.props.txt}
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
};

APP.propTypes = {
    txt:React.PropTypes.string,
    cat:React.PropTypes.number.isRequired
};

APP.defaultProps = {
    txt:'dsfsdsd',
    cat:0
};

React.render(
    <APP cat={5}/>,
    document.body
);