import './Pagination.css';
    
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Pagination as PaginationBootstrap, PaginationItem, PaginationLink } from 'reactstrap';

export default class Pagination extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  static propTypes = {
    limit: PropTypes.number,
    count: PropTypes.number,
  };

  changePage = ev => {
    const { limit, onChangePage, count } = this.props;
    const { page } = this.state;
    const pages = Math.ceil(count / limit);
    let newPage = ev.target.getAttribute('data-page');

    ev.preventDefault();

    if (newPage === 'prev'){
      if(page === 1) return;
      this.setState( prevState => ({ page: prevState.page - 1 }) );
      onChangePage(page - 1);
    } else if (newPage === 'next'){
      if (page === pages) return;
      this.setState(prevState => ({ page: prevState.page + 1}));
      onChangePage(page + 1);
    } else {
      this.setState(prevState =>( { page: +newPage }));
      onChangePage(+newPage);
    }
  }
      
  render() {
    /****
     * переделать с события клик на роутер реакта
     */
    const {limit, count} = this.props;
    const {page} = this.state;
    const pages = Math.ceil( count/limit );
    return (
      <PaginationBootstrap tag="div" size="sm" aria-label="Page navigation example">
        <PaginationItem disabled={page === 1}>
          <PaginationLink data-page="prev" onClick={this.changePage} href="#" >Previous</PaginationLink>
        </PaginationItem>

        {Array(pages).fill('').map( (n, idx) => (
          <PaginationItem key={idx} active={page === (idx + 1)}>
            <PaginationLink data-page={(idx + 1)} onClick={this.changePage}  href="#">{(idx + 1)}</PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={page === pages}>
          <PaginationLink data-page="next" onClick={this.changePage} href="#" >Next</PaginationLink>
        </PaginationItem>
      </PaginationBootstrap>
    );
  }
}
    