import React from 'react';
import joinClasses from 'react/lib/joinClasses';

export default class BIcon extends React.Component{
    render() {
        return(
                <span className={joinClasses(this.props.className,"glyphicon")}></span>
        );
    }
}
