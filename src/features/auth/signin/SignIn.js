import { Button } from '../../../components/button/Button';
import { InputText } from '../../../components/inputText/InputText';

export function SignIn() {
    const handleInputText = (event) => {
        console.log('User input is: ', event.target.value);
        //console.log('User input is: ', event.nativeEvent.explicitOriginalTarget.value);
        //console.log();
    }
    const signInValidators = {
        required: {
            param: null,
            validate: (input) => { return !!(input); }
        },
        minLength: {
            param: 3,
            validate: (input, param) => { return input.length >= param; }
        },
        maxLength: {
            param: 50,
            validate: (input, param) => { return input.length <= param; }
        },
        email: {
            param: null,
            validate: (input) => {
                return String(input).toLowerCase().match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            }
        },
        password: {
            param: null,
            validate: (input) => {
                return String(input).match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*\W).{8,20}$/);
            }
        }
    };


    // [
    //     {
    //         name: 'minLength', 
    //     },
    //     {
    //         name: 'maxLength', 
    //     },
    //     {
    //         name: 'email', 
    //     }
    // ];
    // onKeydown={handleInputText()}
    return (
        <div className="signin-form__container">
            <div className="signin-form__wrapper">
                <div className="signin-form__input--text">
                    <InputText placeholder="Email" type="email" inputHandler={handleInputText}
                        disabled={false}
                        validators={[signInValidators.required, signInValidators.minLength,
                        signInValidators.maxLength, signInValidators.email]}
                    />
                </div>
                <div className="signin-form__input--text">
                    <InputText placeholder="Password" type="password"
                        disabled={false}
                        validators={[signInValidators.required, signInValidators.minLength,
                        signInValidators.maxLength, signInValidators.password]} />
                </div>

                <div className="signin-form__buttons">
                    <Button legend="Sign In" width="120" height="40" fontSize="24" />
                </div>
            </div>
        </div>
    );
}