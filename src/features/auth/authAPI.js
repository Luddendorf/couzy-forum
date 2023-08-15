import { urls } from '../../components/helpers/urls';

export function signInUser(signinFormPayload, setIsLoading) {
    // return new Promise((resolve) =>
    //   setTimeout(() => resolve({ data: amount }), 500)
    // );
    console.log("Payload is: ", signinFormPayload);

    fetch(process.env.REACT_APP_API_URI + urls.signInUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signinFormPayload)
    })
        .then(response => response.text(),
            errorResponse => {
                return errorResponse;
            })
        .then(body => {
            setIsLoading(false);
            return body;
        });
}