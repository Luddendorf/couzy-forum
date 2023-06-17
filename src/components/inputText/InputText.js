import { useState } from 'react';
import { makeValidationResult, validators } from '../helpers/validationHelper';

export function InputText(props) {
    const [validationResult, setValidationResult] = useState(null);
    const [hasBlurred, setHasBlurred] = useState(false);

    const validateField = (event) => {
        const userInput = event.target.value;
        const valFunctions = props.validators.map(config => {
            return {
                name: config.name,
                validate: function (userInput) {
                    return validators[config.name].validate(userInput, config.params);
                }
            };
        });
        return makeValidationResult(valFunctions, userInput);
    };

    const makeInputResult = (event) => {
        setValidationResult(validateField(event));
        props.inputHandler({ input: event.target.value, validation: validationResult });
    }

    const makeClassList = () => {

        return `input-text__field
            ${props.disabled ? 'input-text__disabled' : ''}
            ${validationResult && hasBlurred ? 'input-text__error' : ''}`;
    }



    return (
        <div className="input-text__container">
            <input className={makeClassList()}
                type={props.type}
                placeholder={props.placeholder}
                onKeyUp={(event) => { makeInputResult(event) }}
                onBlur={() => { setHasBlurred(true) }}
                disabled={props.disabled} />
        </div>
    );
}