import React, {PureComponent} from 'react';

import Header from 'components/Header';

const items = [
    {
        "id": "home",
        "title": "Главная",
        "href": "/",
    },
    {
        "id": "blog",
        "title": "Блог",
        "href": "/blog",
    },
];

export default class HeaderContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            links: items,
        };
    }

    render() {
        return (
            <Header links={this.state.links}/>
        );
    }
}