import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    validators: {
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
        }
    },
    makeValidationResult: (valFunctions, userInput) => {
        let allErrors = { errors: {} };

        const requiredValidator = valFunctions.find(validator => validator.name == 'required');
        const minLengthValidator = valFunctions.find(validator => validator.name == 'minLength');
        const maxLengthValidator = valFunctions.find(validator => validator.name == 'maxLength');
        const emailValidator = valFunctions.find(validator => validator.name == 'email');
        const passwordValidator = valFunctions.find(validator => validator.name == 'password');
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
};

export const inputTextSlice = createSlice({
    name: 'inputText',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    }
});

export const { increment, decrement, incrementByAmount } = inputTextSlice.actions;

export const selectValidators = (state) => state.inputText.validators;
export const selectValidationProducer = (state) => state.inputText.makeValidationResult;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
    }
}; */

export default inputTextSlice.reducer;
