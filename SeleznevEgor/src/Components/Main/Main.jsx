/********************************************************************
 * Includes                                                          *
 ********************************************************************/
/*import styles*/
import './Main.scss';

/*import libs*/
import React, {Component} from 'react';

/*User input*/
import Article from 'components/Article/';
import Archive from "../Archive/Archive";
/********************************************************************
 * Code                                                             *
 ********************************************************************/

/**
 * @brief  Отрисовка и логика поведения Главного окна блога. Блог содержит в себе панель сортировки статей по категориям.
 * Сами статьи (количество статей на страниц регулируется состоянием maxArticleOnPage. И блог ссылок на архив.
 * @param  none
 * @retval  Отрисованное основное содержимое блога
 */
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            category : 0,
            maxArticleOnPage : 11,
        }
    }

    onClick = (event) => {
        this.setState({
            category : event.target.parentNode.value
        });
    };

    /*Возвращает список возможных категорий, от сервера ЗАГЛУШКА*/
    getCategories(){
        return ['All','Category 1', 'Category 2','Category 3','Category 4' ]
    }
    /*ЗАГЛУШКА Запрос последних статей с сревера с указанной категорией или со всеми категориями*/
    getData(category){
        const temp= [
            {
                author: 'ivan',
                date: '05-07-2018',
                prev_img: 'image/prev.jpg',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequatur deleniti eius neque numquam odit pariatur sunt voluptatibus?',
                title: 'Title 1',
                category: 1,
                id: 1,
            },
            {
                author: 'ivan',
                date: '05-07-2018',
                prev_img: 'image/prev.jpg',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, voluptas.'   ,
                title: 'Title 2',
                category: 2,
                id: 2,
            },
            {
                author: 'petya',
                date: '05-09-2018',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                title: 'Long Title',
                category: 1,
                id: 3,
            },
            {
                author: 'ivan',
                date: '05-07-2018',
                prev_img: 'image/prev.jpg',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, facilis?',
                title: 'Very very very very long title ',
                category: 4,
                id: 4,
            },
            {
                author: 'ivan',
                date: '05-07-2018',
                prev_img: 'image/prev.jpg',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur cum doloribus labore maiores nihil perspiciatis suscipit. Aperiam, corporis cumque eos, maiores molestiae nulla, obcaecati sed tempora velit vitae voluptatem.',
                title: 'Lorem ipsum dolor sit amet. ',
                category: 1,
                id: 5,
            },
            {
                author: 'ivan',
                date: '05-07-2018',
                prev_img: 'image/prev.jpg',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequatur deleniti eius neque numquam odit pariatur sunt voluptatibus?',
                title: 'Title 10',
                category: 3,
                id: 6,
            },
            {
                author: 'ivan',
                date: '05-07-2018',
                prev_img: 'image/prev.jpg',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequatur deleniti eius neque numquam odit pariatur sunt voluptatibus?',
                title: 'Title 15',
                category: 2,
                id: 7,
            },
            {
                author: 'ivan',
                date: '05-07-2018',
                prev_img: 'image/prev.jpg',
                prev_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consectetur consequatur deleniti eius neque numquam odit pariatur sunt voluptatibus?',
                title: 'Title 40',
                category: 1,
                id: 8,
            },
        ];
        return this.state.category === 0 ? temp : temp.filter(article => article.category === this.state.category);
    }
    /*Возвращает список Архива*/
    getArchive(){
        return [
            {date: 'september 2018', href:'#'},
            {date: 'august 2018', href:'#'},
            {date: 'july 2018', href:'#'},
            {date: 'june 2018', href:'#'},
            {date: 'may 2018', href:'#'},
            {date: 'march 2018', href:'#'},
            {date: 'february 2018', href:'#'},
            {date: 'january 2018', href:'#'},
        ];
    }

    render() {
        const categories = this.getCategories();
        const articles = this.getData();

        return (
            <main>
                <nav className="categoties">
                    <ul className="nav nav-pills">
                        {categories.map((text, index) => {
                            return <li className={"nav-item"} value={index} key={index}><a className={"nav-link "+ (index === this.state.category ? 'active': '')} href="#" onClick = {this.onClick}>{text}</a></li>;
                        })}
                    </ul>
                </nav>
                <div className="row">
                    <div className="articles col-10">
                        <Article isBig={true} article={articles[0]}/>
                        <div className="row">
                            {articles.slice(1,  this.maxArticleOnPage).map((article, index)=>{
                                return <Article article={article} key={index}/>;}) }
                        </div>
                    </div>
                    <div className="col sidebar">
                        <Archive archiveList={this.getArchive()} />
                    </div>
                </div>
            </main>
        )
    }
}