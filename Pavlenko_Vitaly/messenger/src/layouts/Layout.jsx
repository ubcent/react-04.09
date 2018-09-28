import React, {Fragment} from "react";

import ChatsListContainer from "containers/ChatsListContainer";

export default function Layout(props) {
    return (
        <Fragment>
            <ChatsListContainer/>
            {props.children}
        </Fragment>
    );
}