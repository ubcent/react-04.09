import React, { PureComponent } from "react";

export default class MainPage extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Добро пожаловать на блог о чем-то!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dignissimos, doloribus ducimus eius est exercitationem fugit laborum magnam molestiae nesciunt non sequi suscipit, tempora tenetur veritatis? Autem eligendi laborum vero.</p>
            </div>
        );
    }
}