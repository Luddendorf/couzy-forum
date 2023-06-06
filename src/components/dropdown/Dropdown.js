import React, { useState } from 'react';


export function Dropdown(props) {
    const [isArrowUp, setIsArrowUp] = useState(false);

    const toggleArrow = () => { setIsArrowUp(!isArrowUp); }

    const makeArrowClassList = () => {
        return `dropdown__icon--wrapper ${isArrowUp ? 'dropdown__icon--up' : 'dropdown__icon--down'}`;
    }

    const makeBodyClassList = () => {
        return `dropdown__body ${isArrowUp ? 'dropdown__body--hide' : ''}`;
    }

    return (
        <div className="dropdown__container">
            <div className="dropdown__tag">
                <div className="dropdown__legend">{props.legend}</div>
                <div className="dropdown__trigger--holder">
                    <div className={makeArrowClassList()} onClick={toggleArrow}>
                        {/* <div className="dropdown__icon" style={{backgroundColor: props.color}}></div> */}
                    </div>
                </div>
            </div>
            <div className={makeBodyClassList()}>
                {props.children}
            </div>
        </div>
    );
}