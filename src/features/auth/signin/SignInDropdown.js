import { Dropdown } from '../../../components/dropdown/Dropdown';
import { SignUp } from '../signup/SignUp';
import { SignIn } from './SignIn';

export function SignInDropdown() {
    return (
        <div className="signin-dropdown__container">
            <Dropdown legend="Sign in" color="#e3f037">
                <SignIn />
            </Dropdown>
        </div>
    );
}