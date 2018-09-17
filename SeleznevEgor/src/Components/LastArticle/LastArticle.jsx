/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './LastArticle.scss';

/*import libs*/
import  React, {Component} from 'react';

/*User input*/

/********************************************************************
 * Code                                                             *
 ********************************************************************/

 /**
  * @brief  Отрисовка и логика поведения Последней статьи.
  * @param  categories - массив категорий
  * @retval  Отрисованная панель выбора категорий
  */
export default class LastArticle extends Component{

  render(){
    return(
      <div className="card big-article" >
        <img className="card-img-top" src="image/prev.jpg" alt="Article preview" />
        <div className="card-body">
              <h2 className="card-title">Article Header</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deserunt vel asperiores eum possimus earum sed aut cumque amet, in.</p>
              <a href="#" className="btn btn-primary">Подробнее</a>
        </div>
        <div className="card-footer text-muted">
          category1
        </div>
      </div>
    )
  }
}