import React from 'react';
import joinClasses from 'react/lib/joinClasses';

export default class BButton extends React.Component{
    render() {
        var className = this.props;
        return(
            <a className={joinClasses(className, "btn")}>{this.props.children}</a>
        );
    }
}

