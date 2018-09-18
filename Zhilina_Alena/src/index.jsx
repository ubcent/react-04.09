import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import { Col, } from 'reactstrap';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Layout from 'components/Layout';
import PostExample from 'components/PostExample';
import Aside from 'components/Aside';
import Search from 'components/Search';
import Categories from 'components/Categories';
import Paginations from 'components/Paginations';

class App extends Component{
    render(){
        return(
            <Fragment>
                <Header/>
                <Layout>
                    <Col md="8">
                        <h1 className="my-4">Page Heading</h1>
                        <PostExample image="https://image.jimcdn.com/app/cms/image/transf/none/path/s69c9d8983c871dc5/backgroundarea/i6386a6e66372821e/version/1485778555/image.jpg"
                                     title="Post 1 title"
                                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!" />
                        <PostExample image="http://alexzerbach.com/wp-content/uploads/2015/05/amber-code.png"
                                     title="Post 2 title"
                                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"/>
                        <Paginations/>
                    </Col>
                    <Col md="4">
                        <Aside>
                            <Search/>
                            <Categories/>
                        </Aside>
                    </Col>
                </Layout>
                <Footer/>
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));
