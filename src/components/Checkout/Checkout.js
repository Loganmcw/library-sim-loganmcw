import React, { Component } from "react";
import "./Checkout.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

class Checkout extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <main><Nav />
                <div>Checkout</div></main>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Checkout);