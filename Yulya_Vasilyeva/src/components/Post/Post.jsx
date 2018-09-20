//импорт React
import React, { PureComponent, Fragment } from 'react';
import { //импорт формы из Bootstrap
    Button,
    Form,
    Label,
    Input,
    FormGroup,
} from 'reactstrap';

export default class Post extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            postId: 0, //обнуляем для перехода на главную
            postText: '',//текст поста
        };
    }

    //вернуться на главную
    toIndex = () => {
        const { onSend } = this.props;
        onSend(this.postId);
    }

    render() {
        const { postText, postId } = this.props;

        //получаем 
        return (
            <Fragment>
                <Button onClick={this.toIndex} color="info">Все статьи</Button>
                <hr/>
                <h1>{postText.title}</h1>
                <p>Дата публикации: {postText.data}</p>
                <p className="text-center"><img src={`img/article-${postText.id}.jpeg`} alt=""/></p>
                <p>{postText.text}</p>
                
                <h3>Оставить комментарий</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="nameUser" id="name" placeholder="Vasya" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="emailUser" id="email" placeholder="vasya01@mail.ru" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Text Area</Label>
                        <Input type="textarea" name="messageUser" id="message" />
                    </FormGroup>
                    <Button block color="secondary">Отправить</Button>
                </Form>
            </Fragment>
        );
    }
}