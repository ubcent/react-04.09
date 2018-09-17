/********************************************************************
 * Includes                                                          *
 ********************************************************************/

/*import styles*/
import './Main.scss';

/*import libs*/
import  React, {Component} from 'react';

/*User input*/
import NavCategories from 'components/categories/';
import LastArticle from 'components/LastArticle/';
/********************************************************************
 * Code                                                             *
 ********************************************************************/

 /**
  * @brief  Отрисовка и логика поведения Главного окна.
  * @param  categories - массив категорий
  * @retval  Отрисованная панель выбора категорий
  */
export default class Main extends Component{

    render(){
       const {categories} = this.props;
        return (
          <main>
              <NavCategories categories = {categories} />
              <div className="row">
              <div className="articles col-10">
                <LastArticle />
              </div>
              <div className="col sidebar">541531351</div>
            </div>
          </main>
        )
    }
}