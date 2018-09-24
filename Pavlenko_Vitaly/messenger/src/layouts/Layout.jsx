import React, {Fragment} from "react";

import ChatsList from "components/ChatsList";

export default function Layout(props) {
    return (
        <Fragment>
            <ChatsList/>
            {props.children}
        </Fragment>
    );
}