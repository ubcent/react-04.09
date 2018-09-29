//импортируем React
import React, { PureComponent } from 'react';

import Subscr from 'components/Subscr';

/*компонент для окна подписки на новости, при нажати на кнопку
отображается модальное окно*/
export default class SubscrContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
    }
    //появление / скрытие модального окна
    toggle = () => {
        const { modal } = this.state;
        this.setState({
            modal: !modal,
        });
    }

    render() {
        //по нажатию на кнопку появлятеся модальное окно с формой для ввода email
        const { modal } = this.state;//состояние модального окна
        return (
            <Subscr toggle={this.toggle} modal={modal}/>
        );
    }
}
