import './FormComments.scss';

//импорт React
import React, { PureComponent, Fragment } from 'react';
import { //импорт формы из Bootstrap
    Form,
    Label,
    Input,
    FormGroup,
} from 'reactstrap';

export default class Post extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            nameUser: '',
            emailUser: '',
            messageUser: '',
        };
    }

    //изменение формы с сообщением
    changeInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }

    //добавляем комментарии в JSON
    addComment = () => {
        const { nameUser, messageUser, emailUser, update } = this.state;
        const { postId, onSend } = this.props;
        const url = 'http://127.0.0.1:3000/comments';
        //если поля формы не пустые
        if ( nameUser && messageUser && emailUser){
            fetch(url, {
                method: 'post',
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(
                {
                    name: nameUser,
                    text: messageUser,
                    email: emailUser,
                    data: '01-02-2018',
                    postId: postId
                })
            })
            .then(resp => resp.json())
            .catch(err => console.error(err))
            
            this.setState({
                nameUser: '',
                emailUser: '',
                messageUser: '',
            });
            onSend(true);
            alert("Спасибо за ваш комментарий");
        }
        else{
            alert("Проверьте правильно ли вы заполнили форму");
        }
    }
    render() {
        const { nameUser, emailUser, messageUser } = this.state;
        return (
            <Fragment>
                <h3>Оставить комментарий</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input onChange={this.changeInput} type="text" value={nameUser} name="nameUser" id="name" placeholder="Vasya"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={this.changeInput} type="email" value={emailUser} name="emailUser" id="email" placeholder="vasya01@mail.ru"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Сообщение</Label>
                        <Input onChange={this.changeInput} type="textarea" value={messageUser} name="messageUser" id="message"/>
                    </FormGroup>
                    <Input onClick={this.addComment} className="send-comment" type="button" value="Отправить" />
                </Form>
            </Fragment>
        );
    }
}