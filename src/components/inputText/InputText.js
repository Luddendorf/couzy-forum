import React from 'react';

export function InputText(props) {
    // const [isDisabled, setIsDisabled] = useState(false);

    const makeClassList = () => {
        return `input-text__field ${props.disabled ? 'input-text__disabled'
            : ''}`;
    }

    const makeInputTextPayload = (event) => {
        console.log(event);
        console.log(props.validators);
        return { value: event.target.value, isValid: true, errors: [] }
    };

    return (
        <div className="input-text__container">
            <input className={makeClassList()}
                type={props.type}
                placeholder={props.placeholder}
                onInput={props.inputHandler}
                onKeyDown={makeInputTextPayload}
                disabled={props.disabled} />
        </div>
    );
}