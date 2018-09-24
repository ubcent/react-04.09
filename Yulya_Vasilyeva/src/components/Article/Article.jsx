//импорт пользовательских стилей для редактирования статей
import './Article.scss';

//импорт React
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

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
    render() {
        const { article } = this.props;
        return (
            <Row>
                {article.map((item) => {
                    return (
                        <Col md="6" key={item.id}>
                            <Card className="article">
                                <CardImg top width="100%" src={`img/article-${item.id}.jpeg`} />
                                <CardBody>
                                    <CardTitle className='blog-title'>{item.title}</CardTitle>
                                    <CardSubtitle className='blog-data'>Дата публикации: {item.data}</CardSubtitle>
                                    <CardText>{item.descr}</CardText>
                                    <Button tag={Link} to={`/post/${item.id}`} color="warning" className="read-more">Подробнее</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        );
    }
}