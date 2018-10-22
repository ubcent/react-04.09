import './Home.css';

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Home extends PureComponent {

    render() {
        return (
            <div className="home">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur dolor eum modi odio perspiciatis, quis quo saepe! Adipisci,
                    architecto debitis deserunt nihil pariatur voluptatibus. A ab accusamus
                    asperiores atque aut autem consectetur cupiditate deleniti dolorem eligendi
                    eveniet explicabo impedit magnam, minima neque nesciunt non officiis omnis
                    provident qui quibusdam quidem quis quisquam quod ratione recusandae repellendus
                    sint, tempora velit voluptates. Architecto blanditiis est ex exercitationem
                    facere illum incidunt iste molestiae officiis, placeat quia quibusdam ratione
                    similique totam, ut voluptates voluptatum.
                </p>
            </div>
        );
    }
}