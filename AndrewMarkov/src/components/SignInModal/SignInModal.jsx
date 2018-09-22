import React, { Component } from 'react';
import $ from 'jquery';


export class SignInModal extends Component {

    constructor(props) {
        super(props);
        this.loginInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    submitDialog = () => {
        const sendingData = {
            login: this.loginInput.current.value,
            password: this.passwordInput.current.value,
        };

        console.log('Sending...', sendingData);

        this.closeDialog();
    };

    closeDialog() {
        $('#SignInModal').modal('hide');
    }

    render() {
        return (
            <div className="modal" id="SignInModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="login">Login</label>
                                    <input
                                        type="login"
                                        className="form-control"
                                        id="login"
                                        placeholder="Login"
                                        ref={this.loginInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        ref={this.passwordInput}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.submitDialog}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}