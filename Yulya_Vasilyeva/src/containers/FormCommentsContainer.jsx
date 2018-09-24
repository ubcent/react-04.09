//импорт React
import React, { PureComponent, Fragment } from 'react';

import FormComments from 'components/Post/FormComments';

//для проверки свойств компонента
import PropTypes from 'prop-types';

export default class FormCommentsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            nameUser: '',
            emailUser: '',
            messageUser: '',
        };
    }
    static propTypes = {
        nameUser: PropTypes.string,
        emailUser: PropTypes.string,
        messageUser: PropTypes.string,
    }

    //изменение формы с сообщением
    changeInput = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
        });
    }

    //добавляем комментарии в JSON
    addComment = () => {
        const { nameUser, messageUser, emailUser } = this.state;
        const { postId} = this.props;
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
                <FormComments nameUser={nameUser} emailUser={emailUser} messageUser={messageUser} addComment={this.addComment} changeInput={this.changeInput} />
            </Fragment>
        );
    }
}