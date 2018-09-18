import React, { Component, Fragment } from "react";

import Header from 'components/Header';

export default class Layout extends Component {

    render() {

        return (
            <Fragment>
                <Header/>
                <main className="main-content">
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}