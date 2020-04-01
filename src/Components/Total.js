import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultPrice: 3,
        }

        this.empty = this.empty.bind(this);
    }

    empty() {
        this.props.emptycart();
        this.props.dispatch({
            type: "RESET_CART"
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center float-right">
                        <h6>Your Pizza : &nbsp;&nbsp;</h6>
                        <span className="badge badge-secondary">${this.props.totalAmount}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-warning btn-sm" onClick={this.empty}>Reset Cart</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        toppings: state
    }
}
export default connect(mapStateToProps)(Total);