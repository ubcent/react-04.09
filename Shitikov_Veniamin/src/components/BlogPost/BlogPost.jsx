import './BlogPost.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Компонент принимает объект со свойствами:
//
//      title - заголовок
//      subtitle - текст, показываемый в превью.
//      href - ссылка на автора
export default class BlogPost extends PureComponent {
    constructor(props){
        super(props);

    }

    static defaultProps = {
        title: 'Post Title',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
        '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
        '                    quis!',
        href: '#',
    };

    static propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        href: PropTypes.string,
    };

    render(){
        const { title, subtitle, href } = this.props;
       
        return <div className='card mb-4'>
                <div className='card-body'>
            <h2 className='card-title'>{title}</h2>
            <p className='card-text'>{subtitle}</p>
            <a href={href}
               className='btn btn-primary'>Read More →</a>
        </div>
        <div className='card-footer text-muted'>
            <a href={href}>Start
                Bootstrap</a>
        </div>
    </div>
    }
}