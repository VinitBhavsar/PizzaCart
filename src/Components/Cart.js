import React, { Component } from 'react';
import { connect } from 'react-redux';
import Total from './Total';
import FinalTotal from './FinalTotal';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [
                { id: 1, name: "Cold Cuts", price: 5, src: "coldcuts.jpg", count: 0 },
                { id: 2, name: "Pepperoni", price: 3.5, src: "pepperoni.jpg", count: 0 },
                { id: 3, name: "Feta", price: 2.5, src: "feta.jpg", count: 0 },
                { id: 4, name: "Mozzarella", price: 1.5, src: "Mozzarella.jpg", count: 0 },
                { id: 5, name: "Swiss Chees", price: 3, src: "Swiss_cheese_cubes.jpg", count: 0 },
                { id: 6, name: "Spices", price: 0.5, src: "spices.jpg", count: 0 },
                { id: 7, name: "Vegetables", price: 1.25, src: "vegetables.png", count: 0 }
            ],
            checkOutDetails: [],
            defaultPrice: 3,
            total: ''
        }
        this.emptyCart = this.emptyCart.bind(this);
        this.getValues = this.getValues.bind(this);
    }

    add(details) {
        debugger
        var products = this.state.productData;

        products.map(product => {
            if (product.id === details.id) {
                product.count = product.count + 1;
            }
            return 0;
        })
        this.setState({
            productData: products
        })
        const productCounter = details.count;
        const productId = details.id;
        const productName = details.name;
        const productPrice = details.price;
        const productImg = details.src;

        const data = {
            productName,
            productPrice,
            productImg,
            productId,
            productCounter
        }
        this.props.dispatch({
            type: 'PRODUCTS', data: data
        });

        var defaultValue = this.state.defaultPrice;
        var price = details.price;
        var productAmount = +Number(price) + Number(defaultValue);
        this.setState({
            defaultPrice: productAmount
        })
        this.setState({
            total: this.state.defaultPrice
        })
    }

    remove(details) {
        var products = this.state.productData;

        products.map(product => {
            if (product.id === details.id) {
                if (product.count !== 0) {
                    product.count = product.count - 1;
                }
            }
        })
        this.setState({
            productData: products
        })

        const productCounter = details.count;
        const productId = details.id;
        const productName = details.name;
        const productPrice = details.price;
        const productImg = details.src;

        const data = {
            productName,
            productPrice,
            productImg,
            productId,
            productCounter
        }
        this.props.dispatch({
            type: 'REMOVE_TOPPING', data: data
        })
        if (this.state.defaultPrice === 3) {
            this.setState({
                defaultPrice: 3
            })
        }
        else {
            var defaultValue = this.state.defaultPrice;
            var price = details.price;
            var productAmount = Number(defaultValue) - Number(price);
            this.setState({
                defaultPrice: productAmount,
            })
        }

    }

    emptyCart() {
        this.setState({
            defaultPrice: 3,
        })

        var products = this.state.productData;

        products.map(product => {
            product.count = 0;
        })
        this.setState({
            productData: products
        })
    }

    getValues() {
        alert("Total Amount : " + this.state.defaultPrice)
    }
    render() {
        return (
            <React.Fragment>
                <Total totalAmount={this.state.defaultPrice} emptycart={this.emptyCart} />
                <br />
                <br />
                <div className="container">
                    <div className="row float-right border">
                        <table className="table">
                            {
                                this.state.productData.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.name}<p>{product.price}$</p></td>
                                        <td>
                                            {product.count <= 0 ? <button className="btn btn-danger pi pi-minus"
                                                onClick={() => this.remove(product)} disabled></button> :
                                                <button className="btn btn-danger pi pi-minus"
                                                    onClick={() => this.remove(product)}></button>}
                                            <span className="bagde">{product.count}</span>
                                            <button className="btn btn-success pi pi-plus"
                                                onClick={() => this.add(product)}></button>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <FinalTotal price={this.state.defaultPrice} />
                            </tr>
                            <tr>
                                <td><button className="btn btn-primary" onClick={this.getValues}>Checkout</button></td>
                            </tr>
                        </table>
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
export default connect(mapStateToProps)(Cart);