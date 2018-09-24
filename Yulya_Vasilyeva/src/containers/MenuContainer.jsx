import React, { PureComponent } from 'react';

import Menu from 'components/Menu';

//проверка свойств
import PropTypes from 'prop-types';

export default class MenuContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            menu: [],
            isOpen: false,
            activeMenu: 0,
        };
    }
    static propTypes = {
        //пункты меню должны быть строкой
        menu: PropTypes.arrayOf(PropTypes.object),
    }

    //при клике на пункт меню, он становится активным
    clickMenu = (ev) => {
        const { menu } = this.state;
       
        const menuItem = menu.filter( item => item.id === +ev.target.name )[0];
        const url = `http://127.0.0.1:3000/menu/${ev.target.name}`;
        fetch(url, {
            method: 'put',
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: menuItem.title,
                link: menuItem.link,
                active: true
            })
        })
        .then(resp => resp.json())
        .then( ()=>{
            this.setState({
                activeMenu:1
            })
        })
        .catch(err => console.error(err))
    }

    //появление / скрытие коллапс меню
    toggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen,
        });
    }

    componentDidMount(){
        const url = `http://127.0.0.1:3000/menu`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    menu: data
                });
            });
    }
    
    render() {
        const { isOpen, menu } = this.state;//состояние открытового меню (сжатая версия)
        //строим навигацию на сайте (главная)
        return (
            <Menu menu={menu} isOpen={isOpen} toggle={this.toggle} clickMenu={this.clickMenu}/>
        );
    }
}