import './Logo.scss';

import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

export default class Logo extends PureComponent {
    render() {
        return (
            <div className="col-md-2 header-logo">
                <Link to="/about"><img src="image/logo.svg" alt="Блог"/>Блог</Link>
            </div>
        );
    }
}
