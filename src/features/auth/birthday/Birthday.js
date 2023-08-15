import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Button } from '../../../components/button/Button';

import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];


export function Birthday() {
    const [datePicked, setDatePicked] = useState(new Date());
    const [timestampPicked, setTimestampPicked] = useState(null);

    const navigateToSignUp = () => {
        // navigate('/enter-birthday')
        console.log('Continue clicked.');
    }

    const dateIsPicked = (event) => {
        // console.log('Event: ', event.getTime());
        if (event) {
            setTimestampPicked(event.getTime());

        }
        setDatePicked(event);
    }
    return (
        <div className="birthday__container">
            <div className="birthday__header"></div>
            <div className="birthday__wrapper">
                <div className="birthday__left">
                    <div className="birthday__left--picture"></div>
                </div>
                <div className="birthday__right">
                    <div className="birthday__right--top">
                        <div className="birthday__right--top-picture-wrapper">
                            <div className="birthday__right--top-picture"></div>
                        </div>
                        <div className="birthday__right--top-right">
                            <div className="birthday__legend">Sign Up</div>
                            <div className="birthday__text--wrapper">
                                <div className="birthday__text">Existing user?</div>
                                <div className="birthday__link">Sign in</div>
                            </div>
                        </div>
                    </div>
                    <div className="birthday__main">
                        <div className="birthday__main--wrapper">
                            <div className="birthday__main--header">Please enter your birthday.
                            </div>
                            <div className="birthday__main--text">
                                <div className="birthday__main--desc">This is for verification only - we <span className="birthday__main--desc-bold">do not</span> store your birthday.</div>
                                <div className="birthday__main--policy">Our privacy policy.</div>
                            </div>
                            <div className="birthday__picker--wrapper">
                                <div className="birthday__picker">
                                    <DatePicker onChange={dateIsPicked} value={datePicked}
                                        format='MM.dd.yyyy' dayPlaceholder='dd' monthPlaceholder='mm' yearPlaceholder='yyyy'
                                    />
                                </div>
                                <Button legend="Sign up" width="150" height="40" fontSize="25"
                                    handleClick={navigateToSignUp} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// format='M.d.yyyy'

// dayPlaceholder='dd' monthPlaceholder='MM' yearPlaceholder='yyyy' 