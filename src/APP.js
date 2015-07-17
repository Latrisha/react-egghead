import React from 'react';
import joinClasses from 'react/lib/joinClasses';
import Slider from './Slider';
import BButton from './BButton';
import BIcon from './BIcon';
import Table from './Table';


export default  class APP extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            red: React.findDOMNode(this.refs.red.refs.range).value,
            green: React.findDOMNode(this.refs.green.refs.range).value,
            blue: React.findDOMNode(this.refs.blue.refs.range).value
        });

    }

    render(){
        return (
            <div>
                <h1>{this.props.txt}</h1>
                <BButton href="javascript:alert('hello')" className="btn-primary">
                    <BIcon className="glyphicon-heart"/> Button
                </BButton>
                <BButton className="btn-success">
                    <BIcon className="glyphicon-pencil"/> Button
                </BButton>
                <BButton className="btn-danger">
                    <BIcon className="glyphicon-inbox"/> Button
                </BButton>
                <hr/>
                <Slider ref="red" update={this.update} label={'Red: ' + this.state.red} type='range' min={0} max={255} defaultVal={0} />
                <br/>
                <Slider ref="green" update={this.update} label={'Green: ' + this.state.green} type='range' min={0} max={255} defaultVal={0} />
                <br/>
                <Slider ref="blue" update={this.update} label={'Blue: ' + this.state.blue} type='range' min={0} max={255} defaultVal={0} />
                <Table />
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
    <APP cat={10}/>,
    document.body
);