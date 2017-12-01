import React, { Component } from "react";
import "./Cart.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

class Cart extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <main><Nav />
                <div>Cart</div></main>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Cart);