//импортируем React
import React, { PureComponent } from 'react';

import Submenu from 'components/Submenu';

//проверка свойств
import PropTypes from 'prop-types';
//функция fetch
import requestData from './func';

//компонент для бокового меню на странице
export default class SubmenuContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            submenu: []
        }
    }

    static propTypes = {
        //пункты бокового меню должны быть строкой
        submenu: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount() {
        // получаем боковое меню
        requestData('submenu').then((submenu) => {
            this.setState({
                submenu
            });
        })
    }

    render() {
        const { submenu } = this.state;
        return (
            <Submenu submenu={submenu} />
        );
    }
}