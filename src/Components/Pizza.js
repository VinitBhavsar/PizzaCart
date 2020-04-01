import React, { Component } from 'react';
import { connect } from 'react-redux';
class Pizza extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center">
                        <h5>Your Pizza</h5>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="Images/pizza.jpg" className="mb-3 image-fluid" alt="Pizza" width="150" height="150" />
                        </div>
                        {
                            this.props.toppings.sort((a,b) => a.productId > b.productId).map(topping =>
                                topping.productCounter === 0 ? "" :
                                        <div className="col-sm-3" key={topping.productId}>
                                            <img src={"Images/" + topping.productImg} alt={topping.productImg} className="mb-2" width="150" height="150" />
                                            <span className="pi pi-times notify-badge">{topping.productCounter}</span>&nbsp;
                                    </div>
                            )
                        }
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
export default connect(mapStateToProps)(Pizza);