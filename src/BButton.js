import React from 'react';
import joinClasses from 'react/lib/joinClasses';

export default class BButton extends React.Component{
    render() {
        return(
            <a href={this.props.href} className={joinClasses(this.props.className, "btn")}>{this.props.children}</a>
        );
    }
}

