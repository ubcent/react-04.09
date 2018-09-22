import './Paginations.css'

import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink  } from 'reactstrap';

export default class Paginations extends Component{
    render(){

        return(
            <Pagination className="pagination">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        )
    }
}