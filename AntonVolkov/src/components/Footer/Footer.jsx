import './Footer.scss';

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col>
                            <p className="footer__copy">&copy; AntonVolkov 2018</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}