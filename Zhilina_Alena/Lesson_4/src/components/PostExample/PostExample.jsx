import './PostExample.css'

import React, { Component } from 'react';
import { Card,CardImg, CardTitle, CardBody, CardText, CardFooter, Button} from 'reactstrap';

export default class PostExample extends Component{
    render(){
        const { image, title, text } = this.props;

        return(
            <Card className="mb-4">
                <CardImg src={image} />
                <CardBody>
                    <CardTitle tag="h2">{title}</CardTitle>
                    <CardText>{text}</CardText>
                    <Button color="info">Read more</Button>
                </CardBody>
                <CardFooter>Posted on January 1, 2017 by Start Bootstrap</CardFooter>
            </Card>
        )
    }
}