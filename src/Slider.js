import React from 'react';

export default class Slider extends React.Component{
    render() {
        return(
            <input ref="range" type="range" min="0" max="255" onChange={this.props.update}></input>
        );
    }
}
