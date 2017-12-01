import React, { Component } from "react";
import "./Bookshelf.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

class Bookshelf extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <main><Nav />
                <div>Bookshelf</div></main>

        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Bookshelf);