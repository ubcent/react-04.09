//импорт пользовательских стилей для редактирования статей
import './Article.scss';

//импорт React
import React, { PureComponent } from 'react';
//для проверки свойств компонента
import PropTypes from 'prop-types';

//импорт карточек из Bootstrap и Layout
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row, Col // layout
} from 'reactstrap';

export default class Article extends PureComponent {
    constructor(props){
       super(props);
       
        this.state = {
            postId: 0,
        }
    }
    static propTypes = {
        text: PropTypes.arrayOf(PropTypes.object),
    }
    //передаем id поста главному компоненту
    openPost = (ev) => {
        const { onSend} = this.props;
        this.postId = +ev.target.name;
        onSend(this.postId);
    }

    render() {
        const { text } = this.props;
        return (
            <Row>
                {text.map((item)=>{
                    return(
                    <Col md="6" key={item.id}>
                    <Card className="article">
                        <CardImg top width="100%" src={`img/article-${item.id}.jpeg`}/>
                        <CardBody>
                            <CardTitle className='blog-title'>{item.title}</CardTitle>
                            <CardSubtitle className='blog-data'>Дата публикации: {item.data}</CardSubtitle>
                            <CardText>{item.descr}</CardText>
                            <Button name={item.id} onClick={this.openPost} color="warning" className="read-more">Подробнее</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    )
                })}   
            </Row>
        );
    }
}