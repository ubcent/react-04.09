import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import Menu from 'components/Menu';
//функция fetch
import requestData from './func';

export default class MenuContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            isOpen: false,
            update: false,
        };
    }
    static propTypes = {
        //пункты меню должны быть строкой
        menu: PropTypes.arrayOf(PropTypes.object),
    }

    //при клике на пункт меню, он становится активным
    clickMenu = () => {
        const { update } = this.state;
        this.setState({
            update: !update,
        });
    }

    //появление / скрытие коллапс меню
    toggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen,
        });
    }

    componentDidMount() {
        // получаем меню с сервера
        requestData('menu').then((menu) => {
            this.setState({
                menu
            });
        })
    }

    render() {
        const { isOpen, menu } = this.state;//состояние открытового меню (сжатая версия)
        
        //строим навигацию на сайте (главная)
        return (
            <Menu menu={menu} isOpen={isOpen} toggle={this.toggle} clickMenu={this.clickMenu} />
        );
    }
}