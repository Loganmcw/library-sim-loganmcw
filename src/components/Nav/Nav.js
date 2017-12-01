import React, { Component } from "react";
import "./Nav.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/browse"><p>Browse Books</p></Link></li>
                    <li><Link to="/details"><p>Book Details</p></Link></li>
                    <li><Link to="/edit"><p>Edit Book</p></Link></li>
                    <li><Link to="/add"><p>Add Book</p></Link></li>
                    <li><Link to="/cart"><p>Cart</p></Link></li>
                    <li><Link to="/shelf"><p>Bookshelf</p></Link></li>
                </ul>
            </div >

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Nav);