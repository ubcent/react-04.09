import './Main.css'

import React, { PureComponent } from 'react';
import ClassNames from 'classnames';
import { Media } from 'reactstrap';

//собственные модули

export default class Main extends PureComponent {

    render() {
        const { size } = this.props;
        const mainClasses = ClassNames('main', {
            'main-small': size === 'small',
            'main-big': size === 'big',
        });

        return (
                <main className={mainClasses}>
                    <Media>
                        <Media left href="#">
                            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Media main
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                    </Media>
                    <Media>
                        <Media left href="#">
                            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Media
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                    </Media>
                    <Media>
                        <Media left href="#">
                            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                            <Media heading>
                                Media
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                    </Media>
                </main>

        );
    }
}