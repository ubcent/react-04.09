import './FormComments.scss';

//импорт React
import React, { PureComponent, Fragment } from 'react';
import { //импорт формы из Bootstrap
    Form,
    Label,
    Input,
    FormGroup,
} from 'reactstrap';

export default class FormComments extends PureComponent {
    render() {
        const { nameUser, emailUser, messageUser, addComment, changeInput } = this.props;
        return (
            <Fragment>
                <h3>Оставить комментарий</h3>
                <Form>
                    <FormGroup>
                        <Label for="name">Имя</Label>
                        <Input onChange={changeInput} type="text" value={nameUser} name="nameUser" id="name" placeholder="Vasya"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={changeInput} type="email" value={emailUser} name="emailUser" id="email" placeholder="vasya01@mail.ru"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Сообщение</Label>
                        <Input onChange={changeInput} type="textarea" value={messageUser} name="messageUser" id="message"/>
                    </FormGroup>
                    <Input onClick={addComment} className="send-comment" type="button" value="Отправить" />
                </Form>
            </Fragment>
        );
    }
}