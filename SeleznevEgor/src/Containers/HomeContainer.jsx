/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './homepage.scss';
/*import libs*/
import  React, {PureComponent} from 'react';



import ArticlesPreview from 'components/ArticlesPreview/';
import LastComments from 'components/LastComments/'

export default class HomeContainer extends PureComponent{

    render(){
        const articles = new Array(10).fill(10);
        return (
            <div className={"container home-page"}>
                <p className={"greating-message"}><span>Добро пожаловать в  </span></p>
                <h1>Блог</h1>
                <div className="separator"></div>
                <h2>Последние статьи</h2>
                <ArticlesPreview articles={articles}/>
                <div className="separator"></div>
                <h2>Последние комментарии</h2>
                <LastComments />
                
            </div>
        )
    }
}