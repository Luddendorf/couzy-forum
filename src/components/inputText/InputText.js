import React from 'react';
import { useSelector } from 'react-redux';
import { selectValidationProducer, selectValidators } from './inputTextSlice';


export function InputText(props) {
    // const [isDisabled, setIsDisabled] = useState(false);
    const validators = useSelector(selectValidators);
    const validationProducer = useSelector(selectValidationProducer);

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

        return validationProducer(valFunctions, userInput);
    };

    const makeClassList = () => {
        // console.log(validateEmail);
        // validateEmail();
        return `input-text__field ${props.disabled ? 'input-text__disabled'
            : ''}`;
    }

    // const makeInputTextPayload = (event) => {
    //     console.log(event);
    //     console.log(validators);
    //     // console.log(props);
    //     return { value: event.target.value, isValid: true, errors: [] }
    // };

    return (
        <div className="input-text__container">
            <input className={makeClassList()}
                type={props.type}
                placeholder={props.placeholder}
                //onInput={validateField}
                //onKeyDown={validateField}
                disabled={props.disabled} />
        </div>
    );
}