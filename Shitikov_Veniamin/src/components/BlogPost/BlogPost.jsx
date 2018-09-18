import './BlogPost.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Компонент принимает объект со свойствами:
//
//      img[] - [preview, full]
//      title - заголовок
//      subtitle - текст, показываемый в превью.
//      content - полный текст статьи
//      author - автор статьи
//      href - ссылка на автора
//      date - дата публикации
export default class BlogPost extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpened: false,
        }
    }
    static defaultProps = {
        images: [],
        title: 'Post Title',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta\n' +
        '                    expedita corporis animi vero voluptate voluptatibus possimus, veniam magni\n' +
        '                    quis!',
        content: '',
        author: '',
        href: '#',
        date: '',
    };

    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string,
        subtitle: PropTypes.string,
        content: PropTypes.any,
        author: PropTypes.string,
        href: PropTypes.string,
        date: PropTypes.string,
    };

    togglePost = () => this.setState({ isOpened: !this.state.isOpened});

    render(){
        const { images, title, subtitle, content, author, href, date } = this.props;
        const preview = <div className='card mb-4'>
            <img className='card-img-top' src={images[0]}
                 alt='Card image cap' />
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-text'>{subtitle}</p>
                <a href='#' onClick={this.togglePost}
                   className='btn btn-primary'>Read More →</a>
            </div>
            <div className='card-footer text-muted'>
                {author}
                <a href={href}>Start
                    Bootstrap</a>
            </div>
        </div>

        const full = <div className="col-lg-8">

            {/*<!-- Title -->*/}
            <h1 className="mt-4">{title}</h1>

            {/*<!-- Author -->*/}
            <p className="lead">
                by
                <a href={href}>{author}</a>
            </p>

            <hr />

            {/*<!-- Date/Time -->*/}
                <p>Posted on {date}</p>

                <hr />

            {/*<!-- Preview Image -->*/}
                    <img className="img-fluid rounded" src={images[1]}
                         alt="" />

                        <hr />

                            {/*<!-- Post Content -->*/}
                            <p className="lead">{subtitle}</p>

                            <div>{content}</div>


                            <hr />



        </div>
        return (this.state.isOpened) ? full : preview;
    }
}