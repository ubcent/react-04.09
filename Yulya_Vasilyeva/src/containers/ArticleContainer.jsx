//импорт React
import React, { PureComponent } from 'react';
//для подключения контейнера к store
import { connect } from 'react-redux';

import Article from 'components/Article';
import { mountEventPostList } from 'actions/posts';

//для проверки свойств компонента
import PropTypes from 'prop-types';

class ArticleContainer extends PureComponent {
    static propTypes = {
        //article: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount() {
        //подклчаем функции
        const { mountEventPostList } = this.props;
        mountEventPostList();
    }

    render() {
        const { article } = this.props;
        return (
            <Article article={ article } />
        );
    }
}
// в props попадает match, state - содержимое store
//отвечает за то, что находится в Store
function mapStateToProps(state, ownProps){
    //то, что вернем, попадет в props
    return{
        ...ownProps,
        article: state.posts.postList,//post - ветка в store, postList - Объект
    }
}
// для отправки компонетом действий (action)
//отвечает за то, что находится в Actions
function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        //методы, которые мы посылаем из action
        mountEventPostList: () => mountEventPostList(dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleContainer);