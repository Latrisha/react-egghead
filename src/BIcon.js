import React from 'react';
import joinClasses from 'react/lib/joinClasses';

export default class BIcon extends React.Component{
    render() {
        var className = this.props;
        return(
            <div>
                <span className={joinClasses(className,"glyphicon")}></span>
            </div>
        );
    }
}
