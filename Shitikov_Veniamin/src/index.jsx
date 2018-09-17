import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';

const mySite = {
    header: {
        brand: {
            title: 'MyBlog',
            href: '#',
        },
        items: [
            {
                title: 'Home',
                href: '#'
            },
            {
                title: 'Features',
                href: '#'
            },
            {
                title: 'Contacts',
                href: '#'
            }
        ]
    },
    main: {
        navItems: [
            {
                title: 'SideHome',
                href: '#'
            },
            {
                title: 'SideFeatures',
                href: '#'
            },
            {
                title: 'SideContacts',
                href: '#'
            }
        ],
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consectetur consequuntur, dicta doloremque eius et hic pariatur rerum! In, maiores placeat! Aperiam eligendi facere itaque modi molestiae nobis pariatur!',


    },

};
// Компонент принимает свойства:
    //header - объект со свойствами:
        // brand - объект заголовка хедера со свойствами
        //      title - заголовок и
        //      href - ссылка
        // items - массив объектов меню
        //      title - заголовок и
        //      href - ссылка
    //main - объект со свойствами:
        // navItems - массив объектов бокового меню
        //      title - заголовок и
        //      href - ссылка
        // content - основной контент
    //footerContent - контент для футора
class Layout extends Component {
    render(){
        const { header, main } = this.props;
        return <div>
            <Header />
            <Main />
            <Footer/>
        </div>
    }
}

ReactDom.render(<Layout header={ mySite.header} main={mySite.main} />, document.getElementById('root'));