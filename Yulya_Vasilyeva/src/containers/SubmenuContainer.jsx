//импортируем React
import React, { PureComponent } from 'react';

import Submenu from 'components/Submenu';

//проверка свойств
import PropTypes from 'prop-types';

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

    componentDidMount(){
        const url = `http://127.0.0.1:3000/submenu`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    submenu: data,
                });
            });
    }

    render() {
        const { submenu } = this.state;
        return (
            <Submenu submenu={submenu} />
        );
    }
}