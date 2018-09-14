import './Aside.css';

import React, { Component } from 'react';

export default class Aside extends Component {
    render() {
        return (
            <aside>
                <ul>
                    <li><a href="#">Первый пункт</a></li>
                    <li><a href="#">Второй пункт</a></li>
                    <li><a href="#">Третий пункт</a></li>
                </ul>
            </aside>
        );
    }
}