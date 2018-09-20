import './Categories.css'

import React, {Component} from 'react';
import { Card, CardHeader, CardBody, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

export default class Categories extends Component{
    render(){

        return(
            <Card className="my-4">
                <CardHeader>Categories</CardHeader>
                <CardBody>
                    <Row>
                        <Col lg="6">
                            <ListGroup flush>
                                <ListGroupItem tag="a" href="#" className="">Web Design</ListGroupItem>
                                <ListGroupItem tag="a" href="#">HTML</ListGroupItem>
                                <ListGroupItem tag="a" href="#">Freebies</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg="6">
                            <ListGroup flush>
                                <ListGroupItem tag="a" href="#">JavaScript</ListGroupItem>
                                <ListGroupItem tag="a" href="#">CSS</ListGroupItem>
                                <ListGroupItem tag="a" href="#">Tutorials</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>

        )
    }
}