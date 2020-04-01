import React, { Component } from 'react';

class FianlTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this.props.price);
        return (
            <React.Fragment>
                <td><b>Total</b></td>
                <td>${this.props.price}</td>
            </React.Fragment>
        );
    }
}

export default FianlTotal;