import React from 'react';

export default class Row extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.fname}</td>
                <td>{this.props.data.lname}</td>
            </tr>
        )
    }
}