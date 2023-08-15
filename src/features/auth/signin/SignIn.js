import { useState } from 'react';

import { Button } from '../../../components/button/Button';
import { InputText } from '../../../components/inputText/InputText';
import { useLoading } from '../../../components/spinner/Spinner';
import { signInUser } from '../authAPI';

export function SignIn() {
    const [isEmailPristine, setIsEmailPristine] = useState(true);
    const [isPasswordPristine, setIsPasswordPristine] = useState(true);

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);
    const [backendPayload, setBackendPayload] = useState({ email: null, password: null });
    //const validBackendPayload = null;
    const [isLoading, setIsLoading] = useState(false);
    const [signInAnswer, setSignInAnswer] = useState(null);

    const { loading, setLoading } = useLoading();

    const handleEmailInput = (payload) => {
        setIsEmailPristine(false);
        setIsFormValid((!payload.validation && !passwordErrorMessage && !isPasswordPristine));
        if (!payload.validation) {
            setEmailErrorMessage('');
            setBackendPayload({ ...backendPayload, email: payload.input });
            return;
        }
        const key = Object.keys(payload.validation.errors)[0];
        setEmailErrorMessage(errorMessagesEmail[key]);
    }
    const handlePasswordInput = (payload) => {
        setIsPasswordPristine(false);
        setIsFormValid((!payload.validation && !emailErrorMessage && !isEmailPristine));
        if (!payload.validation) {
            setPasswordErrorMessage('');
            setBackendPayload({ ...backendPayload, password: payload.input });
            return;
        }
        const key = Object.keys(payload.validation.errors)[0];
        setPasswordErrorMessage(errorMessagesPassword[key]);
    }

    const sendValidSignInToBackend = () => {
        if (isFormValid) {
            const formPayload = backendPayload;
            setLoading(true);
            const signInResponse = signInUser(formPayload, setLoading);
            console.log('signInResponse', signInResponse);
            setSignInAnswer(signInResponse);
        }
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
                {emailErrorMessage && <div className="signin-form__error--message">
                    {emailErrorMessage}</div>}
                {!emailErrorMessage && <div className="signin-form__spacer"></div>}
                <div className="signin-form__input--text">
                    <InputText placeholder="Password" type="password"
                        inputHandler={handlePasswordInput} disabled={false}
                        validators={validatorsConfigPassword} />
                </div>
                {passwordErrorMessage && <div className="signin-form__error--message">
                    {passwordErrorMessage}</div>}
                {!passwordErrorMessage && <div className="signin-form__spacer"></div>}
                <div className="signin-form__buttons">
                    <Button legend="Sign In" width="120" height="40" fontSize="24" disabled={!isFormValid} handleClick={sendValidSignInToBackend} />
                </div>
                {signInAnswer && <span>{signInAnswer}</span>}
            </div>
            {/* {loading && <Spinner />} */}
        </div>
    );
}