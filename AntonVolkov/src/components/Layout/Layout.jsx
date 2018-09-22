import './Layout.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Widget from 'components/Widget';

export default class Layout extends Component {
    static propTypes = {
        sidebar: PropTypes.bool,
        onChangePage: PropTypes.func
    }

    static defaultProps = {
        sidebar: false,
    };

    render() {
        const { children, sidebar, onChangePage } = this.props;
        const $sidebar = !sidebar ? '' : (
                <Col md="4">
                    <Sidebar>
                        <Widget title="First widget">
                            It's content of widget
                        </Widget>
                        <Widget title="Second widget">
                            It's content of widget
                        </Widget>
                    </Sidebar>
                </Col>
            ) ;  

        let contentMD = sidebar ? 8 : 12;


        return (
            <div className="layout d-flex flex-column">
                <Header onChangePage={onChangePage}/>
                <main className="flex-grow-1">
                    <Container>
                        <Row>
                            <Col md={contentMD}>
                                {children}
                            </Col>
                            {$sidebar}
                        </Row>
                    </Container>
                </main>
                <Footer />
            </div>
        );
    }
}
