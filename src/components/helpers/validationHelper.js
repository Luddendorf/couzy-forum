export const validators = {
    required: {
        validate: (input) => { return !!(input); }
    },
    minLength: {
        validate: (input, param) => { return input ? input.length >= param ? true : false : false; }
    },
    maxLength: {
        validate: (input, param) => { return input ? input.length <= param ? true : false : true; }
    },
    email: {
        validate: (input) => {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                String(input).toLowerCase()
            );
        }
    },
    password: {
        validate: (input) => {
            return String(input).match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*\W).{8,20}$/);
        }
    },
    userName: {
        validate: (input) => {
            return String(input).match(/^\w([._'\s-](?![._])|\w){3,40}\w$/);
        }
    }
};

export function makeValidationResult(valFunctions, userInput) {
    let allErrors = { errors: {} };

    const requiredValidator = valFunctions.find(validator => validator.name === 'required');
    const minLengthValidator = valFunctions.find(validator => validator.name === 'minLength');
    const maxLengthValidator = valFunctions.find(validator => validator.name === 'maxLength');
    const emailValidator = valFunctions.find(validator => validator.name === 'email');
    const passwordValidator = valFunctions.find(validator => validator.name === 'password');
    if (requiredValidator) {
        if (!requiredValidator.validate(userInput)) {
            allErrors.errors.required = true;
            return allErrors;
        }
    }
    if (minLengthValidator) {
        if (!minLengthValidator.validate(userInput)) {
            allErrors.errors.minLength = true;
            return allErrors;
        }
    }
    if (maxLengthValidator) {
        if (!maxLengthValidator.validate(userInput)) {
            allErrors.errors.maxLength = true;
            return allErrors;
        }
    }
    if (emailValidator) {
        if (!emailValidator.validate(userInput)) {
            allErrors.errors.email = true;
            return allErrors;
        }
    }
    if (passwordValidator) {
        if (!passwordValidator.validate(userInput)) {
            allErrors.errors.password = true;
            return allErrors;
        }
    }
    if (Object.keys(allErrors.errors).length > 0) {
        return allErrors;
    }
    return null;
}