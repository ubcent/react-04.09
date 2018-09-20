import React, { Component } from 'react';

export class Header extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-collapse collapse justify-content-between">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="navbar-brand" href="/">Blog</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    data-toggle="modal"
                                    data-target="#SignInModal"
                                >Sign In
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}