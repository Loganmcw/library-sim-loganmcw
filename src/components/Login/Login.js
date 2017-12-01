import React, { Component } from "react";
import "./Login.css"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../ducks/reducer';

class Login extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <main>
                <section>
                    <h1>Book Exchange</h1>
                    <div>
                        <a href={process.env.REACT_APP_LOGIN}>
                            <div>Login / Sign-Up</div></a>
                    </div>
                </section>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Login);