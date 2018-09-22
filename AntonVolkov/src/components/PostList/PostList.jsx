import './PostList.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import PostItem from 'components/PostItem';

export default class PostList extends Component {
    static propTypes = {
        itemsPerPage: PropTypes.number,
        posts: PropTypes.array,
    }

    static defaultProps = {
        itemsPerPage: 12,
        posts: [],
    };

    render() {

        const { posts } = this.props;

        const getPagination = () => {
            let pagination;

            // Тут алгоритм построения пагинации

            pagination = (
                <Pagination tag="div" size="sm" aria-label="Page navigation example" className="post-list__pagination">
                    <PaginationItem>
                        <PaginationLink href="#" >Previous</PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" >Next</PaginationLink>
                    </PaginationItem>
                </Pagination>
            );

            return pagination;
        }

        return (
            <div className="post-list">
                {posts.map( post =>  <PostItem key={post.id} post={post} />)}
                { getPagination() }
            </div>
        );
    }
}