import React, { Component } from "react";
import "./Edit.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav.js';

class Edit extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <main><Nav />
                <div>Edit</div></main>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(Edit);