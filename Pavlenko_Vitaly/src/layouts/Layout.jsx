import React, {Fragment} from "react";

import HeaderContainer from 'containers/HeaderContainer';

export default function Layout(props) {
    return (
        <Fragment>
            <HeaderContainer/>
            <main className="main-content">
                {props.children}
            </main>
        </Fragment>
    );
}