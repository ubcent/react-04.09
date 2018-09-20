/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './Article.scss';

/*import libs*/
import React, {Component} from 'react';
import  PropTypes from 'prop-types';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/

/**
 * @brief  Отрисовка статьи.
 * @param  article - Данные статьи полученные от сервера
 * @param  IsBig - Определяет размер превью статьи.
 * @retval  Отрисованная панель выбора категорий
 */
export default class Article extends Component {
    static propertyTypes = {
        isBig: PropTypes.bool,
        article: PropTypes.object.isRequired,
    };

    static defaultProps = {
        isBig: false,
    };

    render() {
        const {isBig, article} = this.props;
        const img = article.hasOwnProperty('prev_img') ? <img src={article.prev_img} alt="article preview" className={"prev_img"}/> : '';
        const cardclass = isBig ? 'card big-article article-prev' : 'card col-5 article-prev justify-content-between';
        return (
            <div className={cardclass}>
                <div className="card-header">
                    <h2 className={"article-title"}>{article.title}</h2>
                    <p className={"article-info"}>author: <a href="#">{article.author}</a>. posted at <span>{article.date}</span></p>
                </div>
                <div className="card-body">
                    {img}
                    <p className="card-text">{article.prev_text}</p>
                    <a href="#" className="btn btn-primary">Подробнее</a>
                </div>
                <div className="card-footer text-muted">
                    <span>{article.category}</span>
                </div>
            </div>
        )
    }
}