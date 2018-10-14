import './loadMore.scss';
import React, {PureComponent} from 'react';

export default class LoadMore extends PureComponent {
    render() {
        const {loadMore} = this.props;
        return (
            <div className="loadMore">
                <span onClick={loadMore} className={"load-more-btn"}>Load more</span>
            </div>
        );
    }
}
