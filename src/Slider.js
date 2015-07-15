import React from 'react';

export default class Slider extends React.Component{
    componentWillReceiveProps(nextProps){
        console.log("next props: " +nextProps.label);
    }
    render() {
        return(
            <div>
                <input ref="range"
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       defaultValue={this.props.defaultVal}
                       onChange={this.props.update}>
                </input>
                <label> {this.props.label} </label>
            </div>
        );
    }
}


Slider.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number', 'range']),
    defaultVal: React.PropTypes.number
}

Slider.defaultProps = {
    min: 0,
    max: 0,
    val: 0,
    step: 1,
    label: '',
    type: 'range'
}
