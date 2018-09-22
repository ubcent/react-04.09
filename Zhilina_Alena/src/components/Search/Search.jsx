import './Search.css'

import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Form, Input, Button  } from 'reactstrap';

export default class Search extends Component{
    render(){

        return(
            <Card className="my-4">
                <CardHeader>Search</CardHeader>
                <CardBody>
                    <Form inline>
                        <Input type="text" name="search" placeholder="Search for..."></Input>
                        <Button>Go!</Button>
                    </Form>
                </CardBody>

            </Card>
        )
    }
}