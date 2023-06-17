import { useState } from 'react';

import { Button } from '../../../components/button/Button';
import { InputText } from '../../../components/inputText/InputText';

export function SignIn() {
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const handleEmailInput = (payload) => {
        if (!payload.validation) {
            setEmailErrorMessage('');
            return;
        }
        const key = Object.keys(payload.validation.errors)[0];
        setEmailErrorMessage(errorMessagesEmail[key]);
    }
    const handlePasswordInput = (payload) => {
        if (!payload.validation) {
            setPasswordErrorMessage('');
            return;
        }
        const key = Object.keys(payload.validation.errors)[0];
        setPasswordErrorMessage(errorMessagesPassword[key]);
    }
    const validatorsConfigEmail = [
        { name: 'required', params: null },
        { name: 'minLength', params: 3 },
        { name: 'maxLength', params: 50 },
        { name: 'email', params: null }
    ];

    const validatorsConfigPassword = [
        { name: 'required', params: null },
        { name: 'minLength', params: 8 },
        { name: 'maxLength', params: 20 },
        { name: 'password', params: null }
    ];

    const errorMessagesEmail = {
        required: 'Email is required.',
        minLength: 'Email must have at least 3 letters.',
        maxLength: 'Email can have no more than 50 letters.',
        email: 'Email format is not valid'
    };

    const errorMessagesPassword = {
        required: 'Password is required',
        minLength: 'Password should be at least 8 symbols long',
        maxLength: 'Password can not be more than 20 symbols long',
        password: 'Password should have 1 capital letter, 1 digit and 1 symbol'
    };

    return (
        <div className="signin-form__container">
            <div className="signin-form__wrapper">
                <div className="signin-form__input--text">
                    <InputText placeholder="Email" type="email"
                        inputHandler={handleEmailInput} disabled={false}
                        validators={validatorsConfigEmail}
                    />
                </div>
                {/* <div className="signin-form__error--message"></div> */}
                {emailErrorMessage && <div className="signin-form__error--message">
                    {emailErrorMessage}</div>}
                {!emailErrorMessage && <div className="signin-form__spaceer"></div>}
                <div className="signin-form__input--text">
                    <InputText placeholder="Password" type="password"
                        inputHandler={handlePasswordInput} disabled={false}
                        validators={validatorsConfigPassword} />
                </div>
                {passwordErrorMessage && <div className="signin-form__error--message">
                    {passwordErrorMessage}</div>}
                {!passwordErrorMessage && <div className="signin-form__spaceer"></div>}
                {/* <div className="signin-form__error--message">Error message: too many letters
                    Error message: too many letters Error message: too many letters
                </div> */}

                <div className="signin-form__buttons">
                    <Button legend="Sign In" width="120" height="40" fontSize="24" />
                </div>
            </div>
        </div>
    );
}