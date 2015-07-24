import React from 'react';
import Row from './Row.js';
import request from 'reqwest';

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        request({
            url: 'http://www.filltext.com/?rows=100&id={index}&fname={firstName}&lname={lastName}',
            type: '',
            success: function(resp){
                this.setState({data: resp})
            }.bind(this)
        })
    }
    render() {
        return (
            <table>
                {this.state.data.map(function(person, i){
                    return <Row key={i} data={person} />
                })}
            </table>
        )

    }
}


