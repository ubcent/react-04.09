import React, { Component } from 'react';

import Sidebar from 'components/Sidebar';

// Компонент принимает объект со свойствами:

// blogposts - массив объектов постов со свойствами
//      img[] - путь к картинке поста [ preview,  full]
//      title - заголовок и
//      href - ссылка
// content - основной контент
export default class Main extends Component{
    render(){
        const { navItems, content } = this.props;
        return (
            <div className='container'>

                <div className='row'>

                    {/*<!-- Blog Entries Column -->*/}
                    <div className='col-md-8'>

                        <h1 className='my-4'>Page Heading
                            <small>Secondary Text</small>
                        </h1>

                        {/*<!-- Blog Post -->*/}



                        {/*<!-- Pagination -->*/}
                        <ul className='pagination justify-content-center mb-4'>
                            <li className='page-item'>
                                <a className='page-link'
                                   href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>← Older</a>
                            </li>
                            <li className='page-item disabled'>
                                <a className='page-link'
                                   href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>Newer →</a>
                            </li>
                        </ul>

                    </div>

                    {/*<!-- Sidebar Widgets Column -->*/}
                    <div className='col-md-4'>

                        {/*<!-- Search Widget -->*/}
                        <div className='card my-4'>
                            <h5 className='card-header'>Search</h5>
                            <div className='card-body'>
                                <div className='input-group'>
                                    <input type='text' className='form-control' placeholder='Search for...' />
                <span className='input-group-btn'>
                  <button className='btn btn-secondary' type='button'>Go!</button>
                </span>
                                </div>
                            </div>
                        </div>

                        {/*<!-- Categories Widget -->*/}
                        <div className='card my-4'>
                            <h5 className='card-header'>Categories</h5>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <ul className='list-unstyled mb-0'>
                                            <li>
                                                <a href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>Web
                                                    Design</a>
                                            </li>
                                            <li>
                                                <a href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>HTML</a>
                                            </li>
                                            <li>
                                                <a href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>Freebies</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-6'>
                                        <ul className='list-unstyled mb-0'>
                                            <li>
                                                <a href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>JavaScript</a>
                                            </li>
                                            <li>
                                                <a href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>CSS</a>
                                            </li>
                                            <li>
                                                <a href='https://blackrockdigital.github.io/startbootstrap-blog-home/#'>Tutorials</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*<!-- Side Widget -->*/}
                        <div className='card my-4'>
                            <h5 className='card-header'>Side Widget</h5>
                            <div className='card-body'>
                                You can put anything you want inside of these side widgets. They are easy to use, and
                                feature the new Bootstrap 4 card containers!
                            </div>
                        </div>

                    </div>

                </div>

            </div>)
    }
}