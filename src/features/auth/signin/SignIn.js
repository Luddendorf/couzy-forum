import { InputText } from '../../../components/inputText/InputText';
import { Button } from '../../../components/button/Button';

export function SignIn() {
    return (
        <div className="signin-form__container">
            <div className="signin-form__wrapper">
                <div className="signin-form__input--text">
                    <InputText placeholder="Email" type="email" />
                </div>
                <div className="signin-form__input--text">
                    <InputText placeholder="Password" type="password" />
                </div>

                <div className="signin-form__buttons">
                <Button legend="Sign In" width="120" height="40" fontSize="24" />              
                </div>               
            </div>
        </div>
    );
}