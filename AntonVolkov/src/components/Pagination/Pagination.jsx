import './Pagination.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Pagination as PaginationBootstrap, PaginationItem, PaginationLink } from 'reactstrap';

export default class Pagination extends PureComponent {

  static propTypes = {
    limit: PropTypes.number,
    count: PropTypes.number,
    currentPage: PropTypes.number,
  };

  changePage = ev => {
    const { limit, onChangePage, count, currentPage} = this.props;
    const pages = Math.ceil(count / limit);
    let newPage = ev.target.getAttribute('data-page');

    ev.preventDefault();

    if (newPage === 'prev'){
      if (currentPage === 1) return;
      onChangePage(currentPage - 1);
    } else if (newPage === 'next'){
      if (currentPage === pages) return;
      onChangePage(currentPage + 1);
    } else {
      onChangePage(+newPage);
    }
  }
      
  render() {
    /****
     * переделать с события клик на роутер реакта
     */
    const { limit, count, currentPage} = this.props;
    const pages = Math.ceil( count/limit );
    return (
      <PaginationBootstrap tag="div" size="sm" aria-label="Page navigation example">
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink data-page="prev" onClick={this.changePage} href="#" >Previous</PaginationLink>
        </PaginationItem>

        {Array(pages).fill('').map( (n, idx) => (
          <PaginationItem key={idx} active={currentPage === (idx + 1)}>
            <PaginationLink data-page={(idx + 1)} onClick={this.changePage}  href="#">{(idx + 1)}</PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage === pages}>
          <PaginationLink data-page="next" onClick={this.changePage} href="#" >Next</PaginationLink>
        </PaginationItem>
      </PaginationBootstrap>
    );
  }
}
    