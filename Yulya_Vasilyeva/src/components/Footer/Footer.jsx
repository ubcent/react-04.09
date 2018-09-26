//импорт пользовательских стилей для редактирования футера
import './Footer.scss';

//импорт React
import React, { PureComponent } from 'react';
//ипорт компонентов Bootstrap
import { Container } from 'reactstrap';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <Container>
                    Статьи, переводы изображения и торговые марки принадлежат их авторам и владельцам.
                    <br />
                    Copyright &copy; 3dblog.by, 2002-2018.
              </Container>
            </footer>
        );
    }
}