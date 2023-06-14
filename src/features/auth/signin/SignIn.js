import { Button } from '../../../components/button/Button';
import { InputText } from '../../../components/inputText/InputText';

export function SignIn() {
    const handleInputText = (payload) => {
        // console.log('User input is: ', event.target.value);
        //console.log('User input is: ', event.nativeEvent.explicitOriginalTarget.value);
        //console.log();
        console.log('Payload from inputText form control: ', payload);
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

    return (
        <div className="signin-form__container">
            <div className="signin-form__wrapper">
                <div className="signin-form__input--text">
                    <InputText placeholder="Email" type="email" inputHandler={handleInputText}
                        disabled={false}
                        validators={validatorsConfigEmail}
                    />
                </div>
                {/* <div className="signin-form__input--text">
                    <InputText placeholder="Password" type="password"
                        disabled={false}
                        validators={validatorsConfigPassword} />
                </div> */}

                <div className="signin-form__buttons">
                    <Button legend="Sign In" width="120" height="40" fontSize="24" />
                </div>
            </div>
        </div>
    );
}