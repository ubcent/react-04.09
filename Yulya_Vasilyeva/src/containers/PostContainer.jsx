//импорт React
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import Post from 'components/Post';
import { mountEventPost } from 'actions/posts';

//для проверки свойств компонента
import PropTypes from 'prop-types';

class PostContainer extends PureComponent {
    //получаем статью/
    componentDidMount() {
        const { match, mountEventPost } = this.props; //получаем id поста
        const id = match.params.postId;
        mountEventPost(id);
    }

    render() {
        const { article } = this.props;
        return (
            <Fragment>
                {article.length===0 ? 'Загрузка...' :
                    <Post article={article} />
                }
            </Fragment>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        article: state.posts.post,
    }
}
function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        mountEventPost: mountEventPost(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);